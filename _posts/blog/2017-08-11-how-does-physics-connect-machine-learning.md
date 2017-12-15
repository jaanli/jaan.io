---
layout: post-light-feature
title: How does physics connect to machine learning?
description: "Did Richard Feynman help seed a key machine learning technique in the 60s?"
category: articles
tags: [physics, mean field methods, probabilistic models, probability models, ising models, exponential families, variational inference, autoencoder, neural networks, graphical models, inference, deep learning, machine learning]
image:
  feature: physics-machine-learning-figure.svg
  thumb: physics-machine-learning-thumb.png
published: true
---

I struggled to learn machine learning. I was used to variational tricks, MCMC samplers, and discreet Taylor expansions from years of physics training. Now the concepts were mixed up. The intuitive models of physical systems were replaced by abstract models of ‘data’ and amechanical patterns of cause and effect.

I had to fit these fields together. Physics and machine learning are intricately connected, but it is taking me years to make the overlaps precise. This process requires representing the new with the familiar, mapping jargon from one field to another.

A simple model of magnets---the Ising model---will help illustrate the rich connection between these fields. We first analyze this model with physics intuition. Then we derive the variational principle in physics and show that it recovers the same solution.

We then discover how that very same variational principle in physics opens a window into machine learning. We identify Boltzmann distributions as exponential families to make the mapping transparent, and show how approximate posterior inference is scaled to massive data thanks to the variational principle.

If you have a physics background, I hope you will have a better sense of machine learning and be able to read papers in the field. If you are a machine learner, I hope you will have the context to read a statistical physics paper about mean-field theory and the Ising model.

*If this article is confusing, falls short of these goals, or could be improved in any way please [email me](mailto:altosaar@princeton.edu), [@ me](https://twitter.com/thejaan), or [submit a pull request](https://github.com/altosaar/jaan.io/blob/master/_posts/blog/2017-08-11-how-does-physics-connect-machine-learning.md).*

### The Ising model, a physics perspective

Consider a lattice of spins that point up or down:

<center>
<figure>
{% asset ising-model.svg %}
</figure>
</center>

What features might make this a convincing model of magnetism?

Think about playing with magnets---if you put them close together, they pull each other closer. They repulse each other when their poles oppose, and if they’re far apart, they don't attract.

This means neighboring spins should affect each other in our model: if the spins around $$s_i$$ point upward, it should also want to point upward.

Let’s refer to the spin at location $$i$$ as $$s_i$$. A spin can be in one of two **states**: a spin can point up ($$s_i=+1$$) or down ($$s_i=-1$$).

We can capture our intuition about spins being attracted to each other (they want to point in the same direction) or repulsed (they want to point in opposite directions) by introducing a parameter $$J$$. This interaction parameter captures the **interaction strength** between spin $$i$$ and spin $$j$$.

If two neighboring spins point in the same direction, we'll have them contribute a term $$-J$$ to the total energy; if they point in opposing directions, they will contribute $$J$$.

This lets us write the **energy function**, or Hamiltonian, of the system:

$$E(s_1, s_2,...,s_N) = -\frac{1}{2}\sum_{i=1}^N\sum_{j=1}^NJ_{ij} s_i s_j$$

Here $$J_{ij} = J$$ if spins $$i$$ and $$j$$ are neighbors, and $$J_{ij} = 0$$ otherwise. The factor of $$\frac{1}{2}$$ in front is to account for double counting from the sums over both $$i$$ and $$j$$. Note that the system has finitely many spins ($$N$$ spins). 

A spin **configuration** or state of the system is a specific setting of values for all spins. The set $$\{s_1=+1, s_2=+1, s_3=-1, ..., s_N=+1\}$$ is an example of a configuration.

The second law of thermodynamics says that at a fixed temperature and entropy, a system will seek configurations that minimize its energy. This lets us reason about interactions.

If the interaction strength $$J$$ is zero, the spins do not interact and the system has the same energy, zero, for all configurations (i.e. the energy is trivially minimized). But if the interaction strength $$J$$ is positive, the spins will tend to align to minimize the energy of the system $$E(s_1, s_2,...,s_N)$$. This corresponds to minimization because of the minus sign convention in front of the sum in the energy function.

Now let’s introduce a **magnetic field** $$H$$. Imagine the lattice of spins immersed in a magnetic field, perhaps the ambient field from the earth's crust. The magnetic field affects every spin independently, and each spin will try to align with the field. We can include the magnetic field in the energy of the system by summing the independent contributions for each spin:

$$E(s_1, s_2,...,s_N) = -\frac{1}{2}\sum_{i, j} J_{ij}s_i s_j - H\sum_i s_i$$

We can reason about the magnetic field strength $$H$$ by imagining what happens if it is large or small (strong or weak). If $$H$$ is large and the interactions between spins are weak, the magnetic field term will dominate and the spins will align with the magnetic field to minimize energy. But if the magnetic field is small, it is more difficult to reason about.

Now that we have defined the Ising model and its characteristics, let’s think about our goals. What questions can we answer about this Ising model? For example, if we observe the system, what state will it be in---what are the most likely spin configurations? What is the average magnetization?


### The Boltzmann distribution

Can we make our goals more precise and make math from words? To do this, we need to define a distribution over spin configurations. It is straightforward to derive the probability of finding the system in an equilibrium state [^1]:

[^1]: [Derivation](http://www.physics.udel.edu/~glyde/PHYS813/Lectures/chapter_3.pdf)

$$p(s_1, s_2,...,s_N) = \frac{e^{-\beta E(s_1, s_2,...,s_N)}}{Z}$$

This is the **Boltzmann distribution**. The numerator is called the Boltzmann factor for a particular configuration. This factor gives high or low weight to a specific state of the system according to the energy for that state.

We query the Boltzmann distribution at a specific configuration of spins to get the probability of finding the system in this state.

For example, say the first spins in our configuration happen to be up, up, down, etc. We plug this in and get  $$p(s_1=+1, s_2=+1, s_3=-1,...,s_N=+1)=0.7321$$. This means this state was pretty likely.

This distribution behaves intuitively: low energy states are more probable than configurations with high energy. For example, if $$J=+1$$, the spins will align, and the state where all spins point in the same direction is most probable. Why? Because it leads to the most negative energy function, which corresponds to the Boltzmann factor with the largest weight.

The parameter $$\beta$$ is proportional to the inverse temperature, $$\beta = \frac{1}{k_BT}$$ and is used for notational convenience. (Specifically, it includes the constant $$k_B$$ to make the probability density dimensionless.) Temperature affects the model by controlling how important the interactions are. If $$T\rightarrow \infty$$ we are at a high temperature, and the inverse temperature is small with $$\beta \ll 1$$, so the interaction strength $$J$$ is not important. But at low temperatures, the inverse temperature is small and $$J$$ divided by a small number is big, so interactions have a large effect on the system’s behavior.

### The partition function

The denominator $$Z$$ is of utmost importance. It ensures that the distribution integrates to $$1$$ and is thus a valid probability distribution. We need this normalization to calculate properties of the system. Calculating mean values and other moments can only be done with a probability mass function. The name of $$Z$$ is "**partition function**" or "normalizing constant". It is the sum of each state's Boltzmann factor:

$$Z = \sum_{s_1=\pm1}\sum_{s_2=\pm1}...\sum_{s_N=\pm1}e^{-\beta E(s_1, s_2, ..., s_N)}$$

I explicitly wrote out the sum to illustrate why we can’t evaluate this distribution: we need to sum over all possible configurations. Each spin has two states, and there are $$N$$ spins. This leads to $$2^N$$ terms in the sum. For a small system with a hundred spins, this is already greater than the number of atoms in the universe so we can never hope to calculate it [^2].

[^2]: For a tiny system, e.g. with three spins, we have $$8$$ states and the sum is doable - but the system is uninteresting.

### Using the Boltzmann distribution to calculate properties of the system

We arrived at a probability distribution describing which states of the system are likely, however we were stumped by the intractable partition function. Let's temporarily assume we have infinite computation and *can* calculate the Boltzmann distribution's partition function. What are some interesting things we can learn about the system from it's Boltzmann distribution?

This distribution lets us to calculate properties of the system as a whole by taking **expectations** (i.e. calculating observable quantities). For example, the magnetization $$m$$ is the average magnetization over all spins:

$$m = \frac{1}{N} \langle  s_1 + s_1 + ... + s_N \rangle = \langle  s_i \rangle$$

Why should we care about this magnetization? It tells us about the system as a whole, the macrostate, rather than a specific microstate. We lose specificity because we can't say anything about the first spin $$s_1$$, but we learn about how it behaves across all possible states of the rest of the spins. 

If the spins are aligned, the system is in an ordered state and the magnetization has a positive or negative sign. If the spins are anti-aligned, the system is disordered and the average magnetization is zero.

These are global **phases** of the system, and they depend on temperature. If the temperature $$T$$ goes to infinity, the inverse temperature $$\beta$$ goes to zero, and all states of the system are equally likely, as described by the Boltzmann distribution. But if the temperature is finite, then some states are more likely than others, and the system can transition between ordered and disordered phases. Such **phase transitions** and how they depend on the temperature are important for comparing how well this Ising model matches real-world materials [^3].

[^3]: For example, the magnetization of dysprosium aluminium garnet at low temperatures is exactly [described](http://www.sbfisica.org.br/bjp/files/v30_794.pdf) by this model.

Let's remember that we can't evaluate the partition function $$Z$$. This situation seems hopeless for answering interesting questions like calculating the magnetization. But thankfully, we may be able to simplify the problem by considering each spin independently and figuring out an approximation…


### Mean-field theory in physics

Because we cannot evaluate the intractable sum required to calculate the partition function, we turn to **mean-field theory**. 

This is an approximation technique that can still let us answer questions about the system such as the average magnetization. We will study the dependence of the magnetization $$m$$ on temperature.

To demonstrate the technique, it is easiest to focus on a single spin:

<center>
<figure>
{% asset ising-model-single-spin.svg %}
<figcaption>The first spin of the Ising model in a magnetic field H. The magnetic field is shown with dashed lines. Its nearest neighbors provide an effective field through the interactions, denoted by lines connecting the spins.</figcaption>
</figure>
</center>

The contribution of this single spin to the total energy of the system is simply the corresponding term in the energy:

$$E_{s_1} = -s_1\left(J\sum_{j=2}^z+1 s_j + H\right)$$

The sum is over the $$z$$ nearest neighbors. For the two-dimensional lattice we are considering, $$z = 4$$. We can rewrite this energy for a single spin in terms of the fluctuations of a spin $$s_j$$ around its mean value $$m = \langle  s_j \rangle$$. Replacing $$s_j = m + (s_j - m)$$ gives

$$E_{s_1}= -s_1(zJm + H) -J s_1 \sum_{j=2}^z+1 (s_j - m)$$

The next step is crucial: we will ignore the fluctuations of neighboring spins around their mean value. In other words, we assume that the term $$(s_j - m) \rightarrow 0$$, so that each of the neighbors of $$s_1$$ is simply equal to its mean value, $$s_j = m$$.

When is this true?

When the fluctuations around the mean value are small, such as at low temperature ‘ordered’ phases. This assumption greatly simplifies the Hamiltonian for the spin:

$$E_{s_1}^{MF} = -s_1 (zJm + H).$$

This is the mean-field energy function for a single spin. It is equivalent to a non-interacting spin in an *effective* magnetic field, $$H^{eff}=zJm + H$$.

Why do we say this spin is non-interacting? The energy function for the spin only depends on its state, $$s_1$$, and does not depend on the state of any other spins. We have approximated the interaction effects by the average magnetic field induced by the neighboring spins; this is the **mean field**.

In this mean-field model, each spin feels the effects of the magnetic field applied to the entire system, $$H$$, as well as the ‘effective’ mean field from its neighboring spins $$zJm$$.

We clarify this interpretation by writing

$$H\leftarrow H + \Delta H$$

where $$\Delta H = zJm$$ is the the average magnetic field (‘mean field’) of the neighbors of each spin.

By ignoring the fluctuations of each spin, we have reduced the complexity of the problem. Instead of $$N$$ interacting spins, we have $$N$$ *independent* spins in a uniform magnetic field $$H$$ with a small correction $$\Delta H$$ to account for the effects of interactions.

We write the energy function for the mean-field model as

$$E_{MF}(s_1, s_2,...,s_{N}) = -(H+\Delta H)\sum_{i=1}^Ns_i.$$

This shows that there are no interaction terms anymore (the term $$s_is_j$$ doesn’t occur in the energy).

In other words, we can treat each spin independently, then combine the results appropriately to model the entire system!

We have radically changed the nature of the problem.

Instead of computing the partition function $$Z$$ for the whole system, we can now compute it *for a single spin.*

This is straightforward and has an analytic solution [^4]:

[^4]: To see this, recall that $$\cosh x = \frac{e^x + e^{-x}}{2}$$

$$Z_{s_1} = \sum_{s_i = \pm 1} e^{-\beta s_i(H+\Delta H)}$$

$$\Rightarrow Z_{s_1} = 2\cosh{[\beta(H+\Delta H)]}$$

The partition function for the entire mean-field model with $$N$$ spins is then

$$Z_{MF} = (2\cosh{[\beta(H+\Delta H)]} )^N.$$

With the partition function in hand, we can get the Boltzmann distribution and answer questions about the system such as magnetization.

We get the magnetization by taking an expectation over the distribution for the spin. The last step is to require that for any spin $$i$$, its average magnetization should equal the magnetization of the system as a whole:

$$m = \sum_{s_i=\pm 1} p(s_i) s_i$$

$$\Rightarrow m =\tanh{[\beta({H + \Delta H})]}$$

This gives us a clean equation for the magnetization,

$$m = \tanh{[\beta(H + zJm)]},$$

where we used that the mean-field parameter is $$\Delta H = zJm$$.

This is a formula for the magnetization $$m$$ as a function of temperature. It has no closed form solution, but we can plot both sides of the equation and see where they intersect to find the implicit solutions (drag the slider to re-plot at a new temperature):


<iframe width="100%" height="800" frameborder="0" scrolling="no" src="/files/ising_model_magnetization.html"></iframe>


First let’s think about the case when there is no external field, $$H = 0$$.

For high temperatures, the equation only has one solution: $$m = 0$$. This aligns with our intuition---if we look at the energy of the system, the inverse temperature $$\beta$$ goes to zero and all states of the spins are equally likely. They average out to zero.

For low temperatures, we see three solutions: $$m=0$$ and $$m= \pm \lvert m\lvert $$. The additional $$\pm$$ solutions appear when the slope of the $$\tanh$$ function at the origin is greater than one:

$$\frac{d}{dm} \tanh{[\beta zJm]} |_{m=0} > 1$$

$$\Rightarrow  \beta zJ > 1 $$

The "critical temperature" at which the phase transition occurs is when $$\beta zJ = \frac{1}{k_B T} zJ = 1$$, or when $$k_B T_c = zJ$$. 

This gives us a testable prediction: we can take a magnetic material, and measure what temperature its phase transition occurs at.

Have we accomplished our goal? 

We set out to understand the behavior of this model at various temperatures, in terms of global properties like the magnetization. 

By considering a single spin and approximating the effects of other spins as an effective magnetic field, we were able to reduce the complexity of the problem. This allowed us to study phase transitions. However, our exposition felt a little hand-wavy, so let's dive into a rigorous foundation to justify our intuitions.


### Deriving the variational free energy principle: the Gibbs-Bogoliubov-Feynman inequality

Can we learn what tradeoffs we make when we make the assumption of 'ignoring fluctuations' of spins around their mean values? Specifically, how can we gauge the quality of results derived from our mean-field theory? 

We can rederive the mean-field results in the previous section by directly attacking the problem of the intractable partition function. We can try to approximate this partition function with a simpler one.

Recall that the partition function $$Z$$ for the system is

$$Z = \sum_{s_1, s_2, ..., s_N}e^{-\beta E(s_1, s_2,...,s_N)}$$

where as before, the energy for the system is

$$E(s_1, s_2,...,s_N) = -\frac{1}{2}\sum_{i, j} J_{ij}s_i s_j - H\sum_i s_i.$$

The complexity of computing the partition function comes from the interaction term with $$s_is_j$$. We saw that without this term, we were able to reduce the problem to dealing with a system of independent spins.

To derive the variational principle, we will therefore assume an energy function of the form

$$E_{MF}(s_1, s_2,...,s_N) = -(H + \Delta H) \sum_{i=1}^N s_i$$

Previously we saw that the mean-field parameter is $$\Delta H = zJm$$ which we derived using our physics intuition. 

Now we ask the question: is this the optimal effective magnetic field? We can think of $$\Delta H$$ as a parameter of the mean-field model that we can tune to get the best answers for the original system.

This is known as **perturbation theory**: we are perturbing the magnetic field of the system and trying to find the optimal perturbation that yields a good approximation to the original system. 

What does a ‘good approximation’ entail? Our difficulties were in computing the partition function. We therefore want to approximate the partition function of the original system $$Z$$ with the partition function of our mean-field system $$Z_{MF}$$. Let's hope that $$Z_{MF}$$ is easy to calculate and does not require a sum on the order of the number of atoms in the universe.

First let’s see if we can express the partition function of the original system $$Z$$ in terms of our approximation. We can measure how the energy of the mean-field system deviates from the reference system by computing the fluctuations in energy:

$$\Delta E(s_1, s_2,...,s_N) = E(s_1, s_2,...,s_N) - E_{MF}(s_1, s_2,...,s_N)$$

$$\Rightarrow E = E_{MF} + \Delta E$$

This lets us reëxpress the original partition function as:

$$Z = \sum_{s_1, s_2,...,s_N} \exp{[-\beta(E_{MF} + \Delta E)]}$$

$$\Rightarrow Z =Z_{MF} \sum_{s_1, s_2,...,s_N}\frac{\exp{(-\beta E_{MF})} \exp{(-\beta\Delta E)}}{Z_{MF}}$$

For the next step, we need the definition of an expectation of a function $$A$$ with respect to the mean-field Boltzmann distribution:

 $$\langle  A \rangle_{MF} =\sum_{s_1, s_2,...,s_N} \frac{A e^{-\beta E_{MF}}}{Z_{MF}}$$

 This means we can write the partition function of the system in terms of the mean-field partition function as:

 $$Z=Z_{MF}\langle \exp{(-\beta \Delta E)}\rangle_{MF}$$

This is an exact factorization of the partition function of the original system. It is the mean-field partition function weighted by the expected Boltzmann factor for energy fluctuations away from the reference system. 

However, integrating this complicated exponential function is difficult, even with respect to the mean-field system. We’ll simplify it with a classic physics trick---by pulling a Taylor expansion.

Let’s assume that the fluctuations of the energy are small; $$\Delta E \ll 1$$. Then we can Taylor expand the exponent:

 $$\langle \exp{(-\beta \Delta E)}\rangle_{MF}~\approx~\langle  1 - \beta \Delta E + ... \rangle_{MF}$$

 $$=~1 - \beta \langle \Delta E\rangle_{MF}+...$$

 $$=\exp{(-\beta \langle \Delta E\rangle_{MF})} + ...$$

 We have neglected terms of second order in the fluctuations $$\Delta E$$. This gives us our first-order perturbation theory result for the partition function of the original system:

 $$Z \approx Z_{MF}\exp{(-\beta \langle \Delta E\rangle_{MF})}$$

 $$\Rightarrow Z \approx Z_{MF}\exp{(-\beta \langle  E - E_{MF}\rangle_{MF})}$$

 How good is the approximation? We need a simple identity [^5]: $$e^x \geq x + 1$$. 

 [^5]: [Visual proof](http://www.wolframalpha.com/input/?i=plot+e%5Ex,+x+%2B+1) that $$e^x \geq x + 1$$.

Let’s apply this to the expectation in the exact factorization of the partition function, taking $$f = -\beta \Delta E$$:

$$\langle  e^f\rangle = e^{\langle  f\rangle} \langle  e^{(f - \langle  f \rangle)} \rangle$$

$$\geq e^{ \langle  f \rangle} \langle 1 + f - \langle  f \rangle\rangle = e^{\langle  f \rangle}$$

Now we can get a lower bound on the partition function:

$$Z = Z_{MF}\langle  \exp{(-\beta \Delta E)}\rangle_{MF}$$

$$\Rightarrow Z \geq Z_{MF} \exp{[-\beta \langle  E - E_{MF}\rangle_{MF}]}$$

This inequality is the **Gibbs-Bogoliubov-Feynman inequality**. It tells us that with our mean-field approximation, we get a lower bound on the original partition function.


### Variational treatment of the Ising model using the Gibbs-Bogoliubov-Feynman inequality

Let’s apply this theory: do we recover the same results for magnetization in the Ising model?

In the mean-field Ising model, we treat each spin independently, so the energy function of the system decomposes into independent parts:

$$E_{MF}(s_1, s_2,...,s_N) = -(H + \Delta H) \sum_{i=1}^N s_i$$

Here $$\Delta H$$ is the effective magnetic field strength. It is a parameter we can tune to maximize the lower bound on the partition function.

Let’s plug this into the lower bound on the partition function from the Gibbs-Bogoliubov-Feynman inequality. Then we take the derivative to maximize the lower bound:

$$0 = \frac{\partial}{\partial{\Delta H}} Z_{MF} \exp{[-\beta \langle  E - E_{MF}\rangle_{MF}]}$$

First, we need  to evaluate the expectation:

$$\langle E - E_{MF}\rangle_{MF} = -N(\frac{1}{2} Jz\langle s_1\rangle^2_{MF} - \Delta H \langle  s_1 \rangle_{MF}),$$

where we used the mean-field assumption that the spins are independent, hence $$\langle s_i s_j\rangle_{MF} = \langle s_i\rangle_{MF} \langle s_j\rangle_{MF}$$. 

We also assumed that for a large enough system, spins at the edges of the model (boundary conditions) can be ignored, so all spins have the same average magnetization: $$\langle s_i\rangle_{MF}\langle s_j\rangle_{MF} = \langle s_1\rangle_{MF}^2$$.

Plugging this in to the lower bound on the partition function and differentiating gives

$$0 = \tanh[\beta(H + \Delta H)] - \langle s_1\rangle_{MF} - Jz\langle s_1\rangle_{MF} \frac{\partial}{\partial \Delta H} \langle s_1\rangle_{MF} + \Delta H \frac{\partial}{\partial \Delta H} \langle s_1\rangle_{MF}$$

$$\Rightarrow \Delta H = Jz \langle s_1\rangle_{MF}.$$

We used that $$m = \langle s_1\rangle_{MF} =  \tanh{[\beta({H + \Delta H})]}$$ from before.

This confirms our earlier reasoning, that the optimal mean-field parameter is $$\Delta H = Jzm$$. There were three steps to this process. We started by defining the model we cared about, we wrote down a mean-field approximation to it, and we maximized a lower bound on the partition function.

### The machine learning perspective on the Ising model

Now let’s frame what we just did in the language of machine learning. More specifically, let’s think in terms of probabilistic modeling. 

We need some definitions to see how the variational principle is equivalent to variational inference in machine learning.

The Ising model is an **undirected graphical model** or Markov random field. We can represent the conditional dependencies of the model using a graph; the nodes in the graph are random variables. These random variables are the spins of the Ising model, so two nodes are connected by an edge if they interact. This lets us encode the joint distribution of the random variables in the following diagram:

<center>
<figure>
{% asset ising-model-graphical-model.svg %}

<figcaption>
A representation of the Ising model as an undirected graphical model. The nodes are random variables (spins) and edges denote conditional dependencies between their distributions.</figcaption>
</figure>
</center>

The Boltzmann distribution is a parameterization of the joint distribution of this graphical model. This figure looks very similar to the physics spin-based representation---the spins are random variables. We can also write the joint distribution of the nodes in exponential family form. Exponential family distributions let us reason about a broad class of models and deserve a header.


### Exponential families

A way to parameterize probability distributions like the Ising model is with **exponential families**. These are families of distributions that support a representation in this specific, convenient mathematical form:

$$p(x ; \eta) = h(x)e^{\eta^\top t(x) - a(\eta)}$$

Here $$\eta$$ is called the natural parameter, $$h(x)$$ is the base measure, $$t(x)$$ the sufficient statistic and $$a(\eta)$$ is the log normalizer, or log partition function. I was confused about exponential families for a long time and found concrete derivation helpful.

For example, we are used to seeing the Bernoulli distribution in the following form [^6]:

[^6]: The semicolon notation means "the distribution over $$ x $$ is parameterized in terms of the parameter $$ \pi $$".

$$p(x ; \pi) = \pi^x(1-\pi)^{(1-x)}$$

We can rewrite this in exponential family form:

$$p(x; \eta) = \exp{\{x\log \pi + (1-x)\log{(1-\pi)}\}}$$

$$\Rightarrow p(x; \eta)=\exp{\{x\log \frac{\pi}{1-\pi} + \log{(1-\pi)}\}}$$

Comparing to the above formula for exponential families reveals the natural parameter, base measure, sufficient statistic, and log normalizer for the Bernoulli, given by $$\eta = \log{\frac{\pi}{1-\pi}}$$, $$t(x) = x$$, $$a(\eta) = -\log{(1-\pi)} = \log{(1+e^\eta)}$$, and $$h(x) = 1$$ respectively.

More connections to physics: the log normalizer is the log of the partition function. This is made clear in the exponential family form of the Bernoulli: $$\log Z = \log \sum_{x\in\{0,1\}} e^{\eta x} = \log{(1+e^\eta)}$$. We can now identify the parameter $$\eta$$ as a analogous to temperature, with $$x$$ as a spin. We've identified the Ising model's exponential family form!


### The exponential family form of the Ising model

Let’s connect this to the energy function of the Ising model by writing its Boltzmann distribution in exponential family form:

$$p(s_1, s_2,...,s_N; \beta, J, H) = \frac{e^{-\beta E(s_1, ..., s_N)}}{Z}$$

$$p(s_1, s_2,...,s_N; \beta, J, H) = \exp{\{-\sum_{(i, j)\in E}\beta Js_is_j + -\sum_{i \in V}\beta Hs_i  - \log{Z}\}}$$

$$p(s_1, s_2,...,s_N; \theta)=\exp{\{ -\sum_{(i, j)\in E} \theta_{ij}s_is_j -\sum_{i \in V} \theta_i s_i - a(\theta)\}}$$

We have introduced some new notation common to graphical models: we have specified a joint distribution over a collection of random variables $$\{s_1, ..., s_N\}$$ that live on the graph over vertices $$V$$, joined by edges in the set $$E$$. 

This is the exponential family form of the Ising model, a **probability model** with model parameters $$\theta$$. To equate it to the form we saw earlier, set $$\theta_{ij} = \frac{1}{2}\beta J$$ if $$i$$ and $$j$$ share an edge (i.e. they are neighbors), and set $$\theta_i = H$$.

For the Ising model, we can see that there are two sets of model parameters. The spin-spin interaction parameter multiplied by the inverse temperature $$\beta J$$ controls the effects of each edge in the graph. The inverse temperature multiplied by the magnetic field $$\beta H$$ affects each spin independently. We can also say that the inverse temperature $$\beta$$ is a global model parameter. For a fixed interaction and magnetic field, we can vary the temperature to index a specific model.

This is a subtle but important point. Our joint distribution over the set of random variables (the $$N$$ spins) is *indexed* by the set of model parameters. By varying the inverse temperature parameter $$\beta$$, we are actually selecting a specific model (the Ising model at that temperature). Ditto for a specific choice of the spin-spin interaction parameter $$J$$.


### What questions can we ask about the model?

Computing the magnetization $$m = \frac{1}{N}\langle  s_1 + ... + s_N \rangle = \langle  s_i \rangle$$ means calculating the expectation $$\mathbb{E}_{p(s_i)}[s_i]$$. In probability language, this means calculating the marginal expectation of a node $$i$$. 

But calculating the marginal distribution is intractable for reasons we already discussed: it requires marginalizing over all other nodes $$j \neq i$$:

$$p(s_i) = \sum_{s_1=\pm 1} ... \sum_{s_{i-1}=\pm 1}\sum_{s_{i+1}=\pm 1}...\sum_{s_N=\pm1} p(s_1,...,s_{i-1}, s_i, s_{i+1}, ..., s_N)$$

The situation is hopeless: not only do we need to calculate the normalizing constant for the joint distribution of $$N$$ nodes, which has $$2^N$$ terms, but then we need to marginalize over $$N-1$$ variables (another $$2^{N-1}$$ terms).  

This is identical to what we saw in the partition function, when thinking about this model from a physics perspective. 

Can we still answer questions about the marginal distributions by resorting to a variational principle?


### Variational inference in machine learning

If we could calculate the sum over all configurations of random variables, we could calculate the partition function. But we can’t, because the sum grows as $$2^N$$.

With our physics hat on, our strategy was to approximate to the partition function.

From a machine learning perspective, this technique is known as **variational inference**. We *vary* something simple to *infer* something complicated.

Let’s look at how the variational free energy is derived in machine learning and used to approximate partition functions.

We have a probability model of random variables $$p_\theta(s_1, ..., s_N)$$ and we seek to calculate its normalizing constant or partition function [^7].

[^7]: Writing the parameters of a distribution as a subscript ($$p_\theta(s)$$) is shorthand for writing them after the semicolon ($$p(s; \theta)$$).

Let’s construct a simpler probability distribution $$q_\lambda(s_1, ..., s_N)$$, parameterized by $$\lambda$$, and use it to approximate our model.

How good is our approximation? One way of measuring how close our approximation is to our goal distribution is with the Kullback-Leibler divergence.

This divergence between $$q$$ and $$p$$, or relative entropy, measures the amount of information (in bits or nats) that is lost when using $$q$$ to approximate $$p$$.

This gives us a criteria with which to vary our approximation. We the $$\lambda$$ parameter of our approximation until we minimize the approximation error, as measured by the Kullback-Leibler divergence.

The KL divergence is written with a double vertical bar as

$$\textrm{KL}(q(s) \mid\mid p(s)) = \int q(s) \log \frac{q(s)}{p(s)}ds$$

Let’s assume we are dealing with an exponential family distribution such as the Ising model. We let $$p$$ be the Boltzmann distribution for our model with the known energy function $$E(s_1, ..., s_N)$$:

$$p(s) = \frac{e^{-\beta E(s)}}{Z}$$

We assume that $$q$$ is a family of distributions with another energy function that has parameters $$\lambda$$:

$$q_\lambda(s) = \frac{e^{-\beta E_\lambda(s)}}{Z_q}$$

To measure how much information we lose when we use our approximation $$q$$ instead of $$p$$, we plug them into the Kullback-Leibler divergence:

$$\textrm{KL}(q_\lambda(s) \mid \mid p(s)) = \int q_\lambda(s) \log q_\lambda(s) - \int q_\lambda(s) \log \exp{(-\beta E(s))} + \log Z$$

$$= \mathbb{E}_{q_\lambda} [\log q_\lambda(s)] - \mathbb{E}_{q_\lambda}[-\beta E(s)] + \log Z$$

$$= -\mathcal{L(\lambda)} + \log Z$$

where we have defined the variational lower bound $$\mathcal{L}(\lambda)$$ as

$$\mathcal{L}(\lambda) = \mathbb{E}_{q_\lambda}[\log p(s)] - \mathbb{E}_{q_\lambda}[\log q(s)]$$

We can move the variational lower bound to the other side of the equation to get the following identity:

$$\log Z = \textrm{KL}(q \mid\mid p) + \mathcal{L}(\lambda)$$

With Jensen’s inequality it is easy to show that the KL divergence is always greater than or equal to zero. This means that if we make $$\mathcal{L}(\lambda)$$ bigger, the KL divergence must get smaller (i.e. our approximation must improve). Thus we can lower bound the partition function:

$$\log Z \geq \mathcal{L}(\lambda)$$

This means we can vary the parameters $$\lambda$$ of our approximation to improve the lower bound, and get a better and better approximation to the partition function!

Note that in the definition of the variational lower bound, we do not need to worry about the arduous task of calculating the partition function: it does not depend on $$\lambda$$.

This is awesome: we have constructed an approximation $$q_\lambda$$ to our probability model $$p$$ and found a way to vary its parameters so that our approximation gets better and better. 

The interesting part is that we get can improve the approximation to our model $$p$$ without calculating its intractable partition function. We *only* need to evaluate its energy function $$E(s)$$ which is cheap to compute.

Is this too clever to be true? Have we surrendered anything? We have lost the ability to measure how good our approximation is, in absolute terms---for that, we still need to calculate the partition function to compute the KL divergence. We do know that as long as our lower bound $$\mathcal{L}(\lambda)$$ increases as we vary $$\lambda$$, our approximation gets better, and this is sufficient for a variety of problems.


### Variational inference as the Gibbs-Bogoliubov-Feynman inequality!

Let’s see if this is the same as the Gibbs-Bogoliubov-Feynman inequality we saw in physics. Recall that the inequality is

$$Z \geq Z_{MF} \exp{[-\beta \langle E - E_{MF}\rangle_{MF}]}.$$

Taking logarithms:

$$\log Z \geq  - \langle \beta E\rangle_{MF} + \langle \beta E_{MF}\rangle_{MF} + \log Z_{MF}$$

$$\Rightarrow \log Z \geq \mathbb{E}_{q_\lambda} [ \log p(s) ] - \mathbb{E}_{q_\lambda} [\log q_\lambda(s) ]$$

$$\Rightarrow \log Z \geq \mathcal{L}(\lambda)$$

Where we have identified that the variational family we are using, is the mean-field Boltzmann distribution $$q_\lambda(s) = \prod_i \frac{\exp(-\beta E_{MF}(s))}{Z_{MF}}$$. Again, $$\lambda$$ denotes the variational parameters that we vary to maximize the lower bound [^8]. 

[^8]: In the variational treatment of the Ising model we had one variational parameter, the perturbation to the static magnetic field $$\lambda = \Delta H$$.

This shows that variational inference in machine learning---maximizing a lower bound on the partition function---is exactly the Gibbs-Bogoliubov-Feynman inequality in action.


### The evidence lower bound in approximate posterior inference

In machine learning we care about patterns in data. This gives rise to the concept of **latent variables**, unobserved random variables that capture patterns in observed data. 

For example, in linear regression we might posit a linear relationship between someone's age and their income. This scalar coefficient captures a latent pattern that we seek to infer from many examples of (age, income) tuples. 

We refer to a probability model as a model of latent variables $$z$$ and data $$x$$. The **posterior distribution** of latent variables given observed data is written $$p(z \mid x)$$.

What is a posterior? In our regression example of the relationship between age and income, we want the posterior distribution of the regression coefficient after observing data. Our choice of prior on the coefficient is a modeling decision and reflects our belief about the statistical relationship we hope to observe.

The posterior is given by Bayes’ rule:

$$p(z \mid x) = \frac{p(x \mid z) p(z)}{\int p(x, z) dz}$$

The denominator is the evidence; the marginal distribution of the data: $$p(x) = \int p(x, z) dz$$. This is the normalizer of the joint distribution of latent variables and data, or the partition function. This partition function is a sum over all configurations of random variables, and is intractable as we saw twice before.

Can we still do posterior inference despite the intractable partition function?

The refrain is familiar: we have an intractable sum in our partition function, but we can approximate it using the tools we developed earlier! Variational inference to the rescue. Let's write out the variational lower bound on the partition function:

$$\log Z = \log p(x) \geq \mathcal{L}(\lambda) = \mathbb{E}_{q_\lambda}[p(x, z)] - \mathbb{E}_{q_\lambda}[\log q_\lambda (z)]$$

Again, by varying the parameters $$\lambda$$ we can learn a good approximate posterior distribution $$q_\lambda(z)$$ to approximate the posterior we care about but can’t calculate, $$p(z \mid x)$$. 

If we are using the variational method to learn an approximate posterior, our partition function is the evidence $$\log p(x)$$. We thus refer to the variational lower bound $$\mathcal{L}(\lambda)$$ as the **Evidence Lower Bound** or ELBO and speak of maximizing the ELBO to learn a good approximate posterior distribution.

This technique has been used in machine learning for the past two decades. It is becoming popular because intractable partition functions come with the need to analyze large datasets. Because the variational principle relies on optimizing a lower bound, the field has borrowed heavily from the optimization literature to scale Bayesian inference to massive data. It's an exciting area, as new techniques from stochastic optimization may enable us to explore new physics and machine learning models.


### Connections: are machine learning techniques useful in physics?

There are many techniques for approximating partition functions developed in the machine learning community that may find use in physics.

For example, [black box variational inference](https://arxiv.org/abs/1401.0118) and [automatic differentiation variational inference](https://arxiv.org/abs/1603.00788) are generic methods that may be useful in physics. They develop frameworks for constructing expressive approximate distributions and efficient optimization techniques.

Question for physicists familiar with variational methods: is stochastic optimization used in variational methods? *Would* this be useful?


### Connections: could tools from physics be useful in machine learning?

Yes! The Gibbs-Bogoliubov-Feynman inequality was originally developed in physics and found its way to machine learning through Michael Jordan’s group at Berkeley.

There seems to be a separate literature on constructing flexible families of distributions to approximate distributions. The replica trick, renormalization group theory, and others are just some topics that are beginning to make their way from statistical physics to machine learning.

Another example of tools from physics used in machine learning is [operator variational inference](https://arxiv.org/abs/1610.09033). In this work, we developed a framework for constructing operators (such as the KL divergence) that measure how good an approximation is. The framework enables making explicit the tradeoffs between how good our approximation is and how much computation a variational method requires. The Langevin-Stein operator is equivalent to the Hamiltonian operator in physics ([note](https://www.dropbox.com/s/jd844d9ck0yqlgr/operator-hamiltonian-momentum-space.pdf?dl=0)) and was originally developed in a Physical Review Letters [paper](https://arxiv.org/abs/cond-mat/9911396).

A fun question to ponder is "why KL divergence?" and the physics perspective is illuminating. It corresponds to the first-order Taylor expansion of the partition function and comes with assumptions about the non-equilibrium perturbed distribution. Does the second-order Taylor expansion correspond to another divergence and yield more accurate solutions?

I recently learned about replica theory. The replica trick is a technique for calculating the partition function of a system exactly, using an [insane formula](https://en.wikipedia.org/wiki/Replica_trick). It begs the question: what assumptions do we need to use this for probabilistic graphical models? 

I’m excited to see more work in this area as physicists [migrate](https://www.wired.com/2017/01/move-coders-physicists-will-soon-rule-silicon-valley/) to data science and machine learning.

---

How can we make transitions faster? How can we efficiently move techniques between machine learning and physics? Would code samples be helpful?

This post is an attempt at mapping the language from one community to another. Another idea is a long review paper that to give detailed examples of models solved within a statistical physics framework (with mean-field methods, replica theory, renormalization theory, etc) and solved with modern variational inference from a machine learning perspective (black box variational inference, stochastic optimization, etc). This would highlight how the fields complement each other.

### Glossary
- Expectations: the angle brackets $$\langle ~~\cdot~~\rangle$$ denote an expectation. In the machine learning literature, this is denoted as $$\mathbb{E}_p[~~\cdot~~]$$ for the expectation of a quantity with respect to the distribution $$p$$. For example, $$\langle  f(\vec{s}) \rangle$$ denotes an expectation of a function of the spins $$f(\vec{s})$$. The expectation is implicitly with respect to the Boltzmann distribution:
  $$\langle  f(\vec{s}) \rangle = \mathbb{E}_p[f(\vec{s})] = \sum_{\{s_1, ..., s_N\}} f(\vec{s}) p(\vec{s})$$
  $$= \sum_{\{s_1, ..., s_N\}} f(\vec{s})=\frac{e^{-\beta H(\vec{s})}}{Z}$$
- Spins in physics are called random variables in statistics and machine learning.
- The evidence lower bound in variational inference is the negative free energy in physics terminology.

---

*Anything to add or fix in this article to reduce confusion and increase clarity? Please [email me](mailto:altosaar@princeton.edu), [tweet](https://twitter.com/thejaan), or [submit a pull request](https://github.com/altosaar/jaan.io/blob/master/_posts/blog/2017-08-11-how-does-physics-connect-machine-learning.md).*

---

### References
- [Peterson & Anderson (1987)](http://www.complex-systems.com/pdf/01-5-6.pdf) used solutions to time-dependent Ising models to learn the parameters of Boltzmann machines. This is a canonical reference for the ‘start’ of variational inference as it is known in the machine learning community.
- You can go deep into Ising models: there are hundreds of lectures and references on line. Here are the sources I used for these notes: from [Basel](http://quantumtheory.physik.unibas.ch/people/bruder/Semesterprojekte2007/p1/Ising.pdf) and [Munich](https://www.physik.uni-muenchen.de/lehre/vorlesungen/sose_14/asp/lectures/ASP_Chapter5.pdf).
- Dave’s course, [Foundations of Graphical Models](http://www.cs.columbia.edu/~blei/fogm/2016F/)
- [Wainwright & Jordan (2008)](https://people.eecs.berkeley.edu/~wainwrig/Papers/WaiJor08_FTML.pdf) is challenging but worthwhile.
- David Chandler's Introduction to Modern Statistical Mechanics (1987) has a simple derivation of the variational free energy (Section 5.1, pp. 135-138) that I followed in this exposition.
- Feynman, Statistical Mechanics - A set of lecture notes (1972) derives the variational free energy using a perturbation expansion (Section 2.11, pp. 67-71).
- Parisi's Statistical Field Theory (1988) derives the variational principle in three different ways (Section 3.2, pp. 24-31).
- Matthew Beal’s [thesis](http://www.cse.buffalo.edu/faculty/mbeal/thesis/beal03_2.pdf) has interesting references, and Rich Turner has [notes](http://www.gatsby.ucl.ac.uk/~turner/Notes/ContrastiveDivergence/FreeEnergyNotes.pdf) on correspondences between physics and machine learning. 


*Thanks to Bohdan Kulchytskyy, Florian Wentzel, Smiti Kaul, Guillaume Verdon, Henri Palacci, Sam Ritter, Mattias Fitzpatrick, and Sophie Kleber for comments and encouragement. Image credits: Freepik for iconography, and Analytical Scientific for the Newton's cradle image.*

### Footnotes
