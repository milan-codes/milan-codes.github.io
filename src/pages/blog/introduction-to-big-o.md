---
layout: ../../layouts/PostLayout.astro
title: "A brief introduction to Big-O"
pubDate: 2023-07-04
description: "What do we mean by efficient algorithms? How does the runtime of an algorithm grows as its input size grows?"
tags: ["big-o", "complexity-analysis"]
---

# Table Of Contents

- [Table Of Contents](#table-of-contents)
- [Introduction](#introduction)
- [A basic example](#a-basic-example)
  - [Linear search](#linear-search)
  - [Binary search](#binary-search)
- [Mathematically](#mathematically)
  - [Big O](#big-o)
    - [How to get the Big O of any function?](#how-to-get-the-big-o-of-any-function)
  - [Big Omega](#big-omega)
    - [How to get the Big Omega of any function?](#how-to-get-the-big-omega-of-any-function)
  - [Big Theta](#big-theta)
  - [Equals sign or set notation?](#equals-sign-or-set-notation)
- [Conclusion](#conclusion)

# Introduction

Nowadays, you can definitely make it as a programmer without any theoretical computer science background, and there isn't any problem with that, awesome things can be built from scratch without knowing stuff like Big $O$. Yet there are many cases where having a grasp of how your algorithms grow can save you from a lot of trouble. Big $O$ notation (or Landau's symbol) in computer science is used to classify algorithms based on how efficient they are or how much space they need as their input size grows.

Some may call the notation Landau's symbol, because it was invented by German mathematician, Edmund Georg Hermann Landau (1877 – 1938), while others call it Big $O$ notation, because the letter $O$ refers to the rate of growth of a function, also called its _order_. Throughout this article, we'll use the latter appellation. It basically describes how fast a function grows or declines, and is applied in several scientific fields, such as mathematics, complexity theory, and computer science. In this article, I'll try to give you a detailed overview of this useful tool, going into how its applied in computer science, and describing it mathematically.

# A basic example

Your searching algorithm probably runs fast enough when it's used on an array that has the size of 100, but what would happen if you ran it on an array that has the size of 10000? A more appropriate word instead of fast would be efficient. It is important to mention that when we measure an algorithm's efficiency, we're not talking about a real measurement of time. You cannot say that your code runs in $x$ seconds on every computer, since people's hardware vary widely. Instead, Big $O$ measures the asymptotic complexity of a program. To illustrate this, I compared the runtime of linear search & binary search on sorted arrays that had the size of up to 1 million. An $n$ sized array contained the numbers from $0$ to $n-1$, and the algorithms always searched for the value of $n$ in the array to demonstrate worst-case scenarios - that is, that the element we want is not included in the array. The exact results are different on every machine, because of hardware differences, but the way the runtime grows should be similar on every one of them. Let's start with linear search.

## Linear search

> Linear search (also known as sequential search) is a method for finding an element within a list or array.

As the name suggests, it sequentially checks each element of the array, until it founds a match or reaches the end of the array.

Implemented in Python:

```python
def linearSearch(arr, x):
    for i in range(len(arr)):
        if arr[i] == x:
            return i
    return -1
```

Using the code given above, I got the following results:
![Linear search runtime](/assets/040723-big-o/linearSearchRuntime.png)

As you can see in the diagram, the bigger the input size was, the longer it took to find the element we're looking for. The runtime grew proportionally with respect to the input size. Below is some of the data I used to create this chart. In the first column, you see the size of the array, which the algorithm was executed on, and in the second, the time the execution required in milliseconds:

```
1000 0.276
2000 0.553
4000 1.076
8000 2.22
16000 4.317
```

For the algorithm to terminate, in an array that had the size of 2000, took roughly twice as long as it had taken to find an element in an array with the length of 1000 - we're strictly talking about worst-case scenarios, of course. The algorithm had to look at all of the elements of an $n$-sized array, one-by-one. As $n$ increased, the time required to complete the algorithm increased linearly. Thus, we say that linear search runs in $O(n)$

This is why you see the linear pattern on the chart. However, In real life scenarios, linear search is rarely used, because there are other, better alternatives, such as binary search, which offers significantly faster searching.

## Binary search

> Binary search (also known as half-interval search, logarithmic search or binary chop) is a searching algorithm that finds the position of a target within a **sorted array**.

The initial search region is the entire array, meaning if the target exists, it must be between the first and last element of the array. To express this view programatically, we initialise two variables in the beginning, called _lower bound_ & _upper bound_, and set the former to zero, and the latter to the length of the array minus one.

1. If _lower bound_ is greater than _upper bound_, the search terminates as unsuccessful.
2. Now, the algorithm needs to compare the target we're looking for with the element in the middle of the given search region. In order to be able to do that, we initialise another variable called _mid_ and set its value to the floor of _(lower bound + upper bound)/2_.
3. If the value in the array at that position matches the target, its index is returned.
4. If the target is greater than the element, the new search region becomes the upper (or right) half of the array — by setting _lower bound_ to _mid + 1_.
5. If it is smaller than the element, the new search region becomes the lower (or left) half of the array — by setting _upper bound_ to _mid - 1_.

This process is then repeated until a match is found or the search terminates as unsuccessful. Here's a visualisation of this procedure:
![Binary search demo](/assets/040723-big-o/binarySearchDemo.png)

Binary search implemented in Python:

```python
def binarySearch(arr, x):
    lowerBound = 0
    upperBound = 0
    right = len(arr) - 1
    while lowerBound <= upperBound:
        mid = (lowerBound+upperBound) // 2
        if x == arr[mid]:
            return mid
        elif x < arr[mid]:
            upperBound = mid - 1
        else:
            lowerBound = mid + 1
    return -1
```

Now let's take a look at its runtime, just like we did with linear search:
![Binary search runtime](/assets/040723-big-o/binarySearchRuntime.png)

You may have already noticed by looking at the y-axis that how much faster binary search is. It peaks a little bit above 0.1 ms — in comparison, linear search reached 250 ms with bigger sized arrays on my computer. Though, the most important difference is that the linear pattern is gone. This is replaced by a logarithmic one. That is because with each iteration, the algorithm halves the search region. You start with $n$ elements, then you get to $\frac{n}{2}$, then $\frac{n}{4}$ and so on, until you get to a problem the size of 1. This process can be described the following way:

$$
n \rarr \frac{n}{2} \rarr \frac{n}{2^2} \rarr \frac{n}{2^3} \rarr ... \rarr \frac{n}{2^x} \approx 1
$$

The question is, how many times does the algorithm have to divide $n$ by 2 to get to 1? If we solve $\frac{n}{2^x} = 1$ for $x$, we get $x = \log_2 n$. Thus, we say that binary search runs in $O(\log n)$

Below is a list of common functions programmers encounter when they analyse their algorithms, from slowest to fastest growing:
![Algorithm growth rates](/assets/040723-big-o/algorithm-growth-rates.png)

# Mathematically

Big $O$ notation, by definition, means:

> A mathematical notation that describes the limiting behaviour of a function when the argument tends towards a particular value or infinity

First of all, there are many notations that can be used to describe the asymptotic behaviours of functions. The three most important are big $O$ (the letter $O$, not the number zero), big $\Omega$ (big Omega) and big $\Theta$ (big Theta), but there are also little o and little $\omega$ (little omega). The latter two are mostly only used in mathematics. Essentially, with these notations, you can get a sense of how a function grows over time.

## Big O

With the help of big $O$, we can say that an algorithm takes **at most** a certain amount of time or number of steps to execute. In the previous section we explored that binary search runs in $O(\log n)$ — but it's also correct to state that it runs in $O(n^3)$ or $O(n!)$, however, it is imprecise. It's a best practice to always give the tightest bound there is — in the case of binary search, $O(\log n)$.

Mathematically, big $O$ notation gives an asymptotic upper bound. Formal definition:

<div class="overflow-x-scroll">

$$
f(n) = O(g(n)) \iff \exists \, C \in \R^+ \thickspace \exists \, n_0 \in \Z^+ \thickspace \, \text{such that } \, \forall \, n>n_0 \thickspace : \thickspace |f(n)| \, \le \, C|g(n)|
$$

</div>

Which reads as: $f(n)$ is big $O$ of $g(n)$ if there exist a positive constant $C$, and positive integer $n_0$, such that for all $n \ge n_0$, the absolute value of f(n) is less than or equal to $C$ times the absolute value of g(n).

This basically means that $f(n)$ does not grow faster than $g(n)$. It's important to mention that in computer science usually only positive functions with natural numbers as arguments are concerned, hence absolute values can be ignored.

**Example:**

Let

$$
f(n) = 2n+10 \qquad g(n)=n \qquad C = 4
$$

By plugging in we get:

$$
2n+10 \le 4n
$$

Now, let's try to replace $n$ with different values, until the inequality above becomes true:

<div class="overflow-x-scroll">

$$
\begin{array}{c:cc}
|f(n)| \, \le \, C|g(n)| & \text{True} & \text{False}\\ \hline
2+10 \le 4 & & [x]\\
4+10 \le 8 & & [x]\\
6+10 \le 12 & & [x]\\
8+10 \le 16 & & [x]\\
10+10 \le 20 & [x] & \\
12+10 \le 24 & [x] & \\
14+10 \le 28 & [x] & \\
16+10 \le 32 & [x] & \\
... & [x] & \\
\end {array} \qquad \begin{array}{}
n\\ \hline
1\\
2\\
3\\
4\\
5\\
6\\
7\\
8\\
\text{as } n \rarr \infin \\
\end {array}
$$

</div>

As it can be seen in the table, for all $n \ge$ 5, the inequality becomes true. Therefore, we can say that:

<div class="overflow-x-scroll">

$$
\text{for constant }C = 4, \text{and for all  } n \ge n_0 = 5 \\
f(n) = O(g(n))
$$

</div>

This can also be visualised if we graph the two function:
![Big O example 1](/assets/040723-big-o/big-o-example1.png)

### How to get the Big O of any function?

To calculate the big $O$ of any function:

1. Remove the constants
2. Remove the coefficients
3. Find the **most** dominant term

**Example:**

Suppose:

$$
T(n) = 10n^2 + 3n + 9853
$$

By removing the constants, we get:

$$
T(n) = 10n^2 + 3n
$$

Then, removing the coefficients:

$$
T(n) = n^2 + n
$$

And finally, the more dominant term between $n^2$ and $n$ is $n^2$, therefore:

$$
T(n) = O(n^2)
$$

There are other symbols we can use to describe the asymptotic behaviour of functions. One of them is big $\Omega$ (Omega).

## Big Omega

As opposed to Big $O$, with Big $\Omega$, we can say that an algorithm takes **at least** a certain amount of time, or number of steps to execute. If you have an algorithm that runs in $\Omega(n^2)$, then it's also technically correct to state that it runs in $\Omega(\log n)$ - but it's horribly imprecise. We must give the tightest bound possible.

Mathematically, big $\Omega$ gives an asymptotic lower bound. Formal definition:

<div class="overflow-x-scroll">

$$
f(n) = \Omega (g(n)) \iff \exists \, C \in \R^+ \thickspace \exists \, n_0 \in \Z^+ \thickspace \, \text{such that } \, \forall \, n>n_0 \thickspace : \\\thickspace |f(n)| \, \ge \, C|g(n)|
$$

</div>

Which reads as: $f(n)$ is big Omega of $g(n)$ if there exist a positive constant $C$, and positive integer $n_0$, such that for all $n \ge n_0$, the absolute value of $f(n)$ is greater than or equal to $C$ times the absolute value of $g(n)$.

This basically means that $f(n)$ does not grow slower than $g(n)$.

**Example:**

Let

<div class="overflow-x-scroll">

$$
f(n) = 2n+10 \qquad g(n)=n \qquad C = 1
$$

</div>

By plugging in we get:

$$
2n+10 \ge n
$$

Which is always true for all positive $n$. Therefore, we can say that:

<div class="overflow-x-scroll">

$$
\text{for constant }C = 1, \text{and for all  } n \ge n_0 = 1 \\
f(n) = \Omega (g(n))
$$

</div>

Visualised:
![Big Omega example 1](/assets/040723-big-o/big-omega-example1.png)

### How to get the Big Omega of any function?

To calculate the big $\Omega$ of any function:

1. Remove the constants
2. Remove the coefficients
3. Find the **least** dominant term

**Example:**

Suppose:

<div class="overflow-x-scroll">

$$
T(n) = 10n^6 + 1023 + 3n^9 + \log n + 109321
$$

</div>

By removing the constants, we get:

$$
T(n) = 10n^6 + 3n^9 + \log n
$$

Then, removing the coefficients:

$$
T(n) = n^6 + n^9 + \log n
$$

And finally, the least dominant term is $\log n$, therefore:

$$
T(n) = \Omega (\log n)
$$

Now, as I mentioned in the introduction of this section, there is also a third notation commonly used in computer science - Big $\Theta$ (theta).

## Big Theta

If you want to emphasise how good or bad an algorithm really is, you should always describe its big $\Theta$ (if possible), because that is the tightest achievable bound one can give. The reason for that is because the function which gives the amount of time required to execute your algorithm ($f(n)$) is bounded both from above and from below by $g(n)$. In other words, its big $O$ and big $\Omega$ is the same:

<div class="overflow-x-scroll">

$$
f(n) = \Theta(g(n)) \iff f(n) = O(g(n)) \thinspace \text{and} \thinspace f(n) = \Omega(g(n))
$$

</div>

Formal definition:

<div class="overflow-x-scroll">

$$
f(n) = \Theta (g(n)) \iff \exists \, C_1, C_2 \in \R^+ \thickspace \exists \, n_0 \in \Z^+ \thickspace \, \text{such that } \, \forall \, n>n_0 \thickspace : \thickspace C_1|g(n)| \, \le \, |f(n)| \, \le \, C_2|g(n)|
$$

</div>

Which reads as: $f(n)$ is big $\Theta$ of $g(n)$ if and only if there exist positive constants $C_1$, $C_2$, and positive integer $n_0$, such that for all $n \ge n_0$, the absolute value of $f(n)$ is greater than or equal to $C_1$ times the absolute value of $g(n)$ and is smaller than or equal to $C_2$ times the absolute value of $g(n)$.

**Example:**

Previously, we saw that for $f(n) = 2n +10$, $f(n)$ is $O(n)$ and also $\Omega(n)$. Thus, we can say that $f(n)$ is $\Theta(n)$ - and as you can see $f(n)$ is "sandwiched" between $g(n)$:
![Big Theta example 1](/assets/040723-big-o/big-theta-example1.png)

However, if you want to show how well an algorithm runs, and big $\Theta$ is unachievable, then the next best thing to use is big $O$.

## Equals sign or set notation?

It's important to mention that using the equals sign is technically incorrect. As Nicolaas Govert de Bruijn, dutch mathematician said: $O(x) = O(x^2)$ is true but $O(x^2) = O(x)$ is not. Using the equals sign suggests transitivity.

**Example.**

If:

$$
10n^2 + 5n = O(n^2) \\
n = O(n^2) \\
$$

We should be able to conclude that:

$$
10n^2 + 5n = n
$$

But one is not allowed to do that as it is not the case for all $n$ greater than some other number. Instead, it's more appropriate to use set notation, e.g.:

$$
10n^2 + 5n \in O(n^2)
$$

Though, in most cases, people use equals sign, simply out of convention.

# Conclusion

In summary, Big $O$ notation is a tool that enables computer scientists and developers to analyze the efficiency and scalability of algorithms by classifying them into categories like constant, logarithmic, linear, and so on, though it should only be taken as a rough approximation as it ignores constant factors, and lower-order terms. It provides a standardized way to express the upper bound (with big $O$), the lower bound (with big $\Omega$), and the tight bound (with big $\Theta$) of a function. Taking these into account inevitably results in better performance and scalabality in software systems.
