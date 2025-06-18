
# 🧠 Understanding Neural Networks with PyTorch

In this tutorial, we’ll walk through the basics of building a simple neural network using [PyTorch](https://pytorch.org/), one of the most popular deep learning libraries.

> “The best way to learn is by doing. Let’s build something simple — and powerful.”

## 🔧 What We'll Build

We’re going to create a **feedforward neural network** that classifies handwritten digits from the MNIST dataset.

## 📦 Setup

Make sure you have PyTorch installed. If not, install it with:

```bash
pip install torch torchvision
```

## 📄 Sample Code

```python
import torch
import torch.nn as nn
import torchvision
import torchvision.transforms as transforms

# Device config
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

# Hyper-parameters
input_size = 784  # 28x28
hidden_size = 128
num_classes = 10
num_epochs = 2
batch_size = 100
learning_rate = 0.001

# MNIST dataset
train_dataset = torchvision.datasets.MNIST(root='./data', train=True, transform=transforms.ToTensor(), download=True)
test_dataset = torchvision.datasets.MNIST(root='./data', train=False, transform=transforms.ToTensor())

train_loader = torch.utils.data.DataLoader(dataset=train_dataset, batch_size=batch_size, shuffle=True)
test_loader = torch.utils.data.DataLoader(dataset=test_dataset, batch_size=batch_size, shuffle=False)

# Neural network model
class NeuralNet(nn.Module):
    def __init__(self, input_size, hidden_size, num_classes):
        super(NeuralNet, self).__init__()
        self.fc1 = nn.Linear(input_size, hidden_size)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(hidden_size, num_classes)

    def forward(self, x):
        out = self.fc1(x)
        out = self.relu(out)
        out = self.fc2(out)
        return out

model = NeuralNet(input_size, hidden_size, num_classes).to(device)

# Loss and optimizer
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=learning_rate)

# Training loop
for epoch in range(num_epochs):
    for i, (images, labels) in enumerate(train_loader):
        images = images.reshape(-1, 28*28).to(device)
        labels = labels.to(device)

        outputs = model(images)
        loss = criterion(outputs, labels)

        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

    print(f'Epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}')

# Test the model
with torch.no_grad():
    correct = 0
    total = 0
    for images, labels in test_loader:
        images = images.reshape(-1, 28*28).to(device)
        labels = labels.to(device)
        outputs = model(images)
        _, predicted = torch.max(outputs.data, 1)
        total += labels.size(0)
        correct += (predicted == labels).sum().item()

    print(f'Accuracy of the model on the 10,000 test images: {100 * correct / total:.2f}%')
```

## ✅ Summary

- We built a simple feedforward neural network with PyTorch.
- We used the MNIST dataset for digit classification.
- We trained the model and evaluated its accuracy.

This is a great starting point — from here, you can explore deeper architectures, convolutional layers, and more!

---

Happy coding! 🚀
