import { Table, TableCell, TableRow } from "mdast";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { LayoutChangeEvent, ScrollView, Text, View } from "react-native";

import { useMarkdownContext } from "../context";
import { mergeStyles } from "../themes/themes";
import { RendererArgs } from "./renderers";

type TableContextType = {
  rowCount: number;
  columnCount: number;
  columnWidths: number[];
  setColumnWidth: (index: number, width: number) => void;
};

const TableContext = createContext<TableContextType>({
  rowCount: 0,
  columnCount: 0,
  columnWidths: [],
  setColumnWidth: () => {},
});

const useTableContext = (): TableContextType => {
  const context = useContext(TableContext);
  if (!context) {
    return {
      rowCount: 0,
      columnCount: 0,
      columnWidths: [],
      setColumnWidth: () => {},
    };
  }
  return context;
};

type TableContextProviderProps = {
  rowCount: number;
  columnCount: number;
  children: ReactNode;
};

const TableContextProvider = ({
  rowCount,
  columnCount,
  children,
}: TableContextProviderProps) => {
  const { contentSize } = useMarkdownContext();
  const [columnWidths, setColumnWidths] = useState<number[]>(
    Array(columnCount).fill(0),
  );

  const setColumnWidth = useCallback(
    (index: number, width: number) => {
      console.log("setColumnWidth", index, width);
      setColumnWidths((prev) => {
        const minWidth = Math.max(contentSize.width / columnCount, 64);
        const maxWidth = Math.min(contentSize.width, 180);
        const old = prev[index] ?? 0;
        const newWidth = Math.min(
          Math.max(Math.max(old, width), minWidth),
          maxWidth,
        );
        if (newWidth === old) return prev;

        const newColumnWidth = [
          ...prev.slice(0, index),
          newWidth,
          ...prev.slice(index + 1),
        ];
        return newColumnWidth;
      });
    },
    [contentSize, columnCount, setColumnWidths],
  );

  return (
    <TableContext.Provider
      value={{ rowCount, columnCount, columnWidths, setColumnWidth }}
    >
      {children}
    </TableContext.Provider>
  );
};

export const TableRenderer = ({ node }: RendererArgs<Table>): ReactNode => {
  const { renderers } = useMarkdownContext();
  const { TableRowRenderer } = renderers;

  return (
    <TableContextProvider
      rowCount={node.children.length ?? 0}
      columnCount={node.children[0]?.children.length ?? 0}
    >
      <ScrollView horizontal>
        <View>
          {node.children.map((child, idx) => (
            <TableRowRenderer
              node={child}
              key={idx}
              index={idx}
              parent={node}
            />
          ))}
        </View>
      </ScrollView>
    </TableContextProvider>
  );
};

export const TableRowRenderer = ({
  node,
  index,
}: RendererArgs<TableRow>): ReactNode => {
  const { renderers, styles } = useMarkdownContext();
  const { TableCellRenderer } = renderers;

  return (
    <View
      style={{
        flexDirection: "row",
        borderBottomWidth: index === 0 ? 3 : 1,
        borderColor: styles.borderColor,
      }}
    >
      {node.children.map((child, idx) => (
        <TableCellRenderer
          node={child}
          key={idx}
          index={idx}
          parent={node}
          rowIndex={index ?? 0}
        />
      ))}
    </View>
  );
};

export const TableCellRenderer = ({
  node,
  index,
  rowIndex,
}: RendererArgs<TableCell> & { rowIndex: number }): ReactNode => {
  const columnIndex = index ?? 0;
  const { columnWidths, setColumnWidth } = useTableContext();
  const { renderers, styles } = useMarkdownContext();
  const { PhrasingContentRenderer } = renderers;

  const width = columnWidths[columnIndex];
  const style = mergeStyles(styles.tableCell, {
    fontWeight: rowIndex === 0 ? "bold" : "normal",
  });
  const measuredStyle = mergeStyles(style, {
    width: undefined,
    minWidth: undefined,
    maxWidth: undefined,
  });

  const padding = 8;
  const onTextLayout = useCallback(
    (e: LayoutChangeEvent) =>
      setColumnWidth(columnIndex, e.nativeEvent.layout.width + padding * 2),
    [columnIndex, setColumnWidth],
  );

  const content = useMemo(
    () =>
      node.children.map((child, idx) => (
        <PhrasingContentRenderer
          node={child}
          key={idx}
          index={idx}
          parent={node}
        />
      )),
    [node, PhrasingContentRenderer],
  );

  return (
    <>
      <View
        style={{
          width: width,
          minHeight: 32,
          padding: padding,
          justifyContent: "center",
        }}
      >
        <Text style={style}>{content}</Text>
      </View>
      <Text
        style={[
          measuredStyle,
          {
            position: "absolute",
            opacity: 0,
            zIndex: -1000,
          },
        ]}
        onLayout={onTextLayout}
        numberOfLines={1}
      >
        {content}
      </Text>
    </>
  );
};
