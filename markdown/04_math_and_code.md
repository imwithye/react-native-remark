# Math and Code

Markdown can also include LaTeX-style math (if supported by the renderer).

## Inline Math

Euler's identity: $e^{i\pi} + 1 = 0$

## Block Math

$$
\int_0^\infty x^2 e^{-x} dx = 2
$$

## Python Code Block

```python
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b
```
