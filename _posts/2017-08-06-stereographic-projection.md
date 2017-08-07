---
layout: post
title: Stereographic Projection
author: Henry Blanchette
published: false
category: 3D Visualization
feature:
  file: Stereographic_projection_in_3D.svg.png
  file_type: image
---

## Introduction

Stereographic projection, in short, is a technique for preserving the structure of an $$(n+1)$$-dimensional set of points in a $$n$$-dimensional representation. Doing this can be extremely useful when, for example, you have some 4D surface, but you want to be able to actually see it. This comes up in my work with [Milnor Fibrations]({{ site.baseurl }}/posts/milnor-fibrations), where the fibers are in fact 4D. This article will explain how stereographic projection works in general, and at the end there are some neat, interactive examples.

How does this sort of projection preserve what kind of structure, and how does it work exactly? Read more to find out.

## Stereographic Projection

Lets try projecting $$\mathbb{R}^2 \rightarrow \mathbb{R}^1$$, so $$n=1.$$ The key requirement for stereographic projection is that the points in your higher-dimensional space be on the surface of $$\mathbb{S}^n,$$ so in this case, the circle around the origin. It is possible to modify the location and size of $$\mathbb{S}^n,$$ but let's not worry about that right now. Comprehensively, this is a mapping $$\mathbb{S}^n \rightarrow \mathbb{R}^n$$. To project a point from this circle, say $$p,$$ down onto $$\mathbb{R}^1,$$ say $$p^\prime,$$ draw a line from the top of the circle, a point we can call $$\infty,$$ through $$p,$$ making sure to extend your line so that it passes through $$\infty,$$$$a,$$ and $$\mathbb{R}^1.$$ The point at which this line intersects $$\mathbb{R}^1$$ is $$p^\prime.$$

In the gif below, the green dot is $$p$$ and the blue dot is $$p^\prime.$$ The bar at the top indicates the $$\theta$$ along $$\mathbb{S}^n$$ that $$p$$ is. 

![](../assets/posts/stereographic-projection/stereographic2D.gif)

It is hard to tell, but the frame where the green dot would be at the top of the circle is missing (intentionally). It turns out that our name for that point was appropriate; it would map to $$\pm \infty$$ on $$\mathbb{R}^1.$$ This doesn't make sense for the projection though, so one way to solve this is just to remove $$\infty$$, via the final mapping

$$
\mathbb{S}^n \setminus \infty \rightarrow \mathbb{R}^n
$$

This 2D to 1D example probably seems boring, but it clearly shows the process. If you are interested in the aesthetics of 3D to 2D stereographic projection, I recommend you check out Henry Segerman's models that use a light source at [latex]\infty[/latex] to project a cutout [latex]\mathbb{S}^n[/latex] onto the ground: [(7,3,2) triangles](https://www.thingiverse.com/thing:1608550), [(5,3,2) triangles](https://www.thingiverse.com/thing:1608531), [(7,3,2) triangles (small)](https://www.thingiverse.com/thing:477006).

![(7,3,2) triangles](https://thingiverse-production-new.s3.amazonaws.com/renders/67/93/fc/10/85/7bcb839d83537413cefdb521bc70cb85_preview_featured.jpg)

## Interactive Examples

The 3D model below demonstrates a circle on $$\mathbb{S}^2$$ being mapped to $$\mathbb{R}^2$$ via stereographic projection (created by Kyle Ormsby). Note that the circle is preserved!

{% include stl name="stereo_repaired.stl" %}

For some more interactive examples, I've created a Mathematica notebook that demonstrates stereographic projection into $$\mathbb{R}^3, \mathbb{R}^2$$ and, of course, $$\mathbb{R}^1.$$ Check it out here: [stereographic projection](../assets/posts/stereographic-projection/stereographic-projection.nb)

## Application - Milnor Fibrations

Now that you've learned about the process of stereographically projecting, I reccomend that you check out my article about [Milnor Fibrations]({{ site.baseurl }}/posts/milnor-fibrations), a mesmerizing application of this straightforward process of projecting from the dimensions above!