---
layout: post
title: Milnor Fibrations
author: Henry Blanchette
published: true
category: Milnor Fibrations
feature:
  file: fibrations-cool.jpg
  file_type: image
---

This is an outline

## What is a Milnor Fibration?

So now to the real meat of the topic. When you read the title of this article, you probably wondered what a [milnor fibration](https://en.wikipedia.org/wiki/Milnor_map) is. Perhaps you googled it and found that wikipedia page, or maybe even this [pdf](https://www.unf.edu/~ddreibel/research/milnor/milnor.pdf). Together they actually give a pretty good basis for defining the subject, which is more generally a milnor map, and here I hope to give you an intuitive understanding of how particular milnor maps are constructed, and how their resulting visualizations behave.

First, I think it is best to define the skeleton of the construction. For my purposes, I will be restricting my attention to mappings from $$\mathbb{C}^2 \rightarrow \mathbb{S}^1$$. The comprehensive mapping looks like this:

$$
\mathbb{S}^3 \setminus V \rightarrow \mathbb{S}^1.
$$

$$\mathbb{S}^3$$ conveniently lies in $$\mathbb{C}^2$$, so we can refer to $$(z,w) \in\mathbb{S}^3.$$ Additionally, this $$\mathbb{S}^3$$ will have radius $$\epsilon,$$ which we can worry about specifying later. A particular milnor map will rely on a complex polynomial

$$
f = z^m - w^n,
$$

where $$w,n \in \mathbb{N}_+.$$ We will see the effects of the choice of these variables are later. Now, in the domain, we need to remove a special set $$V$$,

$$
V = \left\{ (z,w) \in \mathbb{S}^3 \mid f(z,w) = 0_{\mathbb{C}} \right\};
$$

this is just $$f^{-1}(0_{\mathbb{C}}).$$ The reason for this is explained by the next step. This whole mapping is defined by

$$
M: (z,w) \mapsto \frac{f}{\left| f \right|}.
$$

So we didn't want to deal with zeros in the denominator, that's all. This map guarantees that $$M^{-1} \subseteq \mathbb{S}^1$$. So where are the 'fibers' that were mentioned in the title? And, after all, where is the visualization opportunity? It seems that $$M$$ is working with a 4D input, which is beyond the reach of current printing technology.

Well, consider a point $$ \theta \in M^{-1} \subseteq \mathbb{S}^3 $$. Since $$ \theta \in \mathbb{S}^1 $$, we are able to smoothly vary over it. $$\theta$$'s preimage in $$\mathbb{S}^3$$ is a 'fiber,' and, as you can see, there is a fiber over each $$\theta$$. This preimage is indeed 4D, but because it conveniently lies in $$\mathbb{S}^3$$, we can use stereographic projection from $$\mathbb{S}^3 \rightarrow \mathbb{R}^3$$. So in total, we can project each one of $$M$$'s fibers into 3D! Additionally, we can project $$V$$ into 3D (which stays constant for each fiber). $$V$$ acts like a 'binding' for the fibered 'pages' that wrap around it. This kind of fibration is appropriately called an 'open book decomposition.'

My models are created using the following equations as basis (a summarization of the above process):

$$
M : \mathbb{S}^3 -> \mathbb{S}^1,
M(z,w) \mapsto \frac{f}{\left | f \right |}
$$

## Models

Show off models I created, along with code and explanations for different styles of modeling.

Exhibit some Mathematica code for modeling.

## Figure-8 Knot

(not sure if I want to put this in the post)

Intro to difference between this and the Milnor models.

Adapting Mathematica code to accept Real polynomials.

Result.