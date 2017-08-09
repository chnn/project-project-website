---
layout: post
title: Milnor Fibrations
author: Henry Blanchette
published: true
category: Milnor Fibrations
feature:
  file: milnor-cool-large.jpg
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
V = \left \{ (z,w) \in \mathbb{S}^3 \mid f(z,w) = 0_{\mathbb{C}} \right \};
$$

this is just $$f^{-1}(0_{\mathbb{C}}).$$ The reason for this is explained by the next step. This whole mapping is defined by

$$
M: (z,w) \mapsto \frac{f}{\left| f \right|}.
$$

So we didn't want to deal with zeros in the denominator, that's all. This map guarantees that $$M^{-1} \subseteq \mathbb{S}^1$$. So where are the 'fibers' that were mentioned in the title? And, after all, where is the visualization opportunity? It seems that $$M$$ is working with a 4D input, which is beyond the reach of current printing technology.

Well, consider a point $$ \theta \in M^{-1} \subseteq \mathbb{S}^3 $$. Since $$ \theta \in \mathbb{S}^1 $$, we are able to smoothly vary over it. $$\theta$$'s preimage in $$\mathbb{S}^3$$ is a 'fiber,' and, as you can see, there is a fiber over each $$\theta$$. This preimage is indeed 4D, but because it conveniently lies in $$\mathbb{S}^3$$, we can use stereographic projection from $$\mathbb{S}^3 \rightarrow \mathbb{R}^3$$. So in total, we can project each one of $$M$$'s fibers into 3D! Additionally, we can project $$V$$ into 3D (which stays constant for each fiber). $$V$$ acts like a 'binding' for the fibered 'pages' that wrap around it. This kind of fibration is appropriately called an 'open book decomposition.'

My models are created using the following equations as basis (a summarization of the above process):

$$
M : \mathbb{S}^3 \setminus V \rightarrow \mathbb{S}^1, M(z,w) \mapsto \frac{f}{\left | f \right |}
$$

$$
\sigma : \mathbb{S}^3 \rightarrow \mathbb{R}^3
$$

$$
\Phi : \mathbb{R}^2 \times \mathbb{S}^1 \rightarrow \mathbb{R}^3, \Phi(m,n,\theta) \mapsto \sigma \circ M_{m,n}^{-1}(\theta)
$$

where $$\sigma$$ is the appropriate stereographic projection from a sphere of radius $$\epsilon$$.

## Modeling

Visualizing various Milnor Fibrations involved many desicions about what in the visualization you want to emphasize. The basic sort of depiction involves would be just a single fiber. My notation for referencing a single fiber will be

$$
\Phi(m,n,\theta)
$$

where $$\theta$$ is the angle of projection and $$m,n$$ are the same as in $$M$$. This is the same as the mathematical definition above. For example, the model below is $$\Phi(2,3,0)$$.

{% include stl name="fiber_2-3-0.stl" %}

Amazing! So what would $$\Phi(2,3,\pi/4)$$ look like?

{% include stl name="fiber_2-3-pidiv4.stl" %}

Alright, there's definitely a pattern going on here, which is what we should expect from the nature of the domain of $$\Phi$$'s $$\theta$$. The consistent structure in the middle section of the model is the complex singularity that we've been interested in. You may have already guessed what happens at $$\theta = \pi/2$$, and in $$\pi/2 \leq \theta \leq \pi$$. Just to confirm, here's $$\Phi(2,3,\pi/2)$$:

{% include stl name="fiber_2-3-pidiv2.stl" %}

As you can see, this fiber should stretch out to infinity, although I've cut it short for viisual convenience. You might have to rotate and zoom this model a bit to get a good angle.

All of the above fibers have a boundry on the same knot in the middle area. In the case of $$\Phi(2,3,\pi/2)$$, it turns out in fact to be a 2-3 torus knot, the trefoil knot. Why is this? Looking back to our mathematical definitions, we can see that the fibers are in the domain of $$M$$, which is $$\mathbb{S}^3 \setminus V$$. $$V$$ is the preimage of the singular point $$0 \in \mathbb{S}^1$$. A way to think of this is that our function "blows up" at $$V$$; it is $$\pm \infty$$ on our $$\mathbb{S}^3$$. There is a more detailed explanation of the relationship between Morse Theory and the topology of $$K$$ in Milnor's own work [Singular points of complex hypersurfaces](http://www.jstor.org/stable/j.ctt1bd6kvv), however I will only cover it briefly here.

$$K$$ bounds $$\Phi(m,n,\theta)$$, and we an describe its behavior by breaking down the unit circle that is the image of $$M$$.

Lemma 5.9 from Milnor states that there exists a smooth vector field $$\textbf{v}$$ on $$\mathbb{D}^3 \setminus V$$ such that the inner product

$$
\langle \textbf{v}(z), \textnormal{grad } \log f(z) \rangle
$$

is real and positive for all $$z$$ and that $$\langle \textbf{v}(z),z \rangle$$ has a positive real part. Next, consider the solutions to the differencial equation

$$
\frac{dp}{dt} = \textbf{v}(p(t))
$$

on the same $$\mathbb{D}^3 \setminus V$$. Following from 5.9, we can deduce that $$\vert f(p(t)) \vert $$ is strictly monotone. With the condition $$2\mathscr{R}\langle \frac{dp}{dt},p(t) \rangle = \frac{d\|p(t)\|^2}{dt} > 0$$, we have a guarantee that $$\|p(t)\|$$ is strictly monotone.

From this, we can think about starting at a point $$z \in \mathbb{D}^3 \setminus V$$ and follow the appropriate path along $$\textbf{v}$$ away from the origin (this direction will increase $$\vert f(z) \vert$$) until we get to a point on the circle, $$z^\prime \in \mathbb{S}^3 \setminus V$$. Using the previous demonstrations, we can say that

$$
\frac{f(z^\prime)}{\vert f(z^\prime) \vert}
$$

Exhibit some Mathematica code for modeling.

## Figure-8 Knot

(not sure if I want to put this in the post)

Intro to difference between this and the Milnor models.

Adapting Mathematica code to accept Real polynomials.

Result.