---
title: "A Bibliographic Survey of Neural Language Models"
excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus."
coverImage: "/assets/cover.jpg"
date: "2026-04-29T16:58:00.322Z"
author:
  name: Fagner Leal Pantoja
  picture: "/assets/personalphoto.png"
ogImage:
  url: "/assets/cover.jpg"
---





# Abstract


This text presents a literature review of Language Models (LM), covering two main topics: 
  (1) The __Transformers__-based Neural Network used to train modern language models; and 
  (2) The __Semantic Space__  represented by the network underlying the LM. 
The semantic space which is constituted by the word vectors as the basic units of the language being modeled. The vector space  computationally represents the language of interest by compressing its statistical semantics into vectors. 




<!-- word vectors composing the semantics embedd


(and its constituent word vectors)


Neural Language Models that compress the statistical semantics of textual data into word vectors.


Transformers-based Neural Network the modern language models and established as state-of-the-art in addressing Natural Language Processing (NLP) problems 


and a suitable approach to train Language Models


which are deep neural networks to encode a given language.  -->


<!-- The scope of this review covers two main topics: (i) Transformers-based Neural Networks, established as state-of-the-art in addressing Natural Language Processing (NLP) problems and a suitable approach to train Language Models; and (ii) Neural Language Models that compress the statistical semantics of textual data into word vectors. These word vectors computationally represent the basic units of the language at hand. -->


In fact, obtaining such a computational representation for textual constructs is a long-standing problem that has challenged diverse NLP (Natural Language Processing) approaches. The establishment of transformers-based language models opens up vast possibilities and perspectives on interdisciplinary topics beyond NLP. 




Therefore, this survey details the history, the development and the mechanisms of Transformers-based language models. The text concludes with a critical analysis addressing issues regarding applications based on language models.


<!-- We analyzed the usage of language models for Topic Modeling and for Semantic Annotation of Virtual Patients. -->


<!-- # This is a Heading h1 -->
# 1. Introduction




  Natural Language Processing (NLP) is a field of Computer Science whose goal is to convert human language into a representation that is interpretable by computers. It is an interdisciplinary research area that incorporates concepts from various other fields, such as Statistics and Linguistics.


Manning and Schütze<sup>[[1](#ref1)]</sup>
classify NLP methods into statistical and non-statistical approaches. Statistical approaches rely on patterns that commonly occur in a language, while non-statistical approaches focus on mapping and computationally implementing the rules that structure the language. The distinction between statistical and non-statistical approaches has roots grounded in the philosophical debate surrounding the perspectives of Rationalism and Empiricism<sup>[[1](#ref1)]</sup>. 


In the epistemological realm<sup>[[2](#ref2)]</sup>, Rationalism claims the ideas of deductive reasoning are possible because they are innate, prior to all experience. In turn, Empiricism states that none of our ideas are innate, and the mind would be a blank tablet when we are born. Subsequently, Kant considered both the concept of active mind (from rationalism) and the role of sensations (from empiricism) as essentials in knowledge acquisition. In turn, Bertrand Russell "explicitly rejected the existence of innate ideas". The debate remains open and has led to the development of several philosophical schools.


In the field of Linguistics, the rationalist perspective is characterized by the belief in the existence of an innate language fixed in the human brain through genetic inheritance. Advocated by Noam Chomsky<sup>[[1](#ref1)]</sup>, rationalism has been crucial to the development of the theory of Formal Languages, which serves as the foundation for current programming languages. Formal languages constitute a special class of language that lacks ambiguity and, therefore, can be interpreted/compiled by computers. The ability to interpret a language in a non-ambiguous manner is essential for a computer to execute commands instructed by humans through a source code<sup>[[1](#ref1)]</sup>.


In contrast to programming languages, natural languages are inherently ambiguous, since a word or phrase can have more than one meaning<sup>[[3](#ref3)]</sup>. In natural language cases, the empiricist perspective assumes that, instead of pre-constructed linguistic structures, the human mind possesses generic operations of association, generalization, and pattern recognition. These cognitive abilities, combined with a rich sensory system, enable humans to learn detailed language structures. This hypothesis forms the basis of Machine Learning methods that use statistical models to recognize patterns and complex structures in a dataset. This statistical approach is grounded in the Information Theory developed by Claude Shannon<sup>[[1](#ref1)]</sup>.


Manning and Schütze<sup>[[1](#ref1)]</sup> point out that "the difference between the approaches is not absolute but one of degree", as rationalism believes "the key parts of language are innate – hardwired in the brain at birth as part of the human genetic inheritance" while empiricism believes in an innate capacity to develop language through generalizations such that "a baby’s brain begins with general operations for association, pattern recognition, and generalization, and that these can be applied to a rich sensory input available to the child to learn the detailed structure of natural language".


This philosophical debate remains an open question; however, its practical utility is valuable as it theoretically underpins various areas of computer science.


More recently, statistical approaches have advanced the state-of-the-art in various NLP tasks. This progress can be attributed to, among other factors: (1) advances in computational capacity; (2) recent deep neural network models capable of retaining significantly more information than previously proposed neural models; and (3) the development of more efficient techniques for handling the vast amount of information available on the Web.


The rest of this text is organized as follows: sections 2 and 3 give some background on foundations of Neural Networks, Deep Neural Networks, Transformers, as well as the history and development of the so-called Neural Language Models. Sections 4 and 5 review related work of two case studies that involve neural networks and transformers: Topic Modeling and Semantic Annotations of virtual patients. Section 6 briefly discusses more recent work developed in research in Language Models. This is followed by a section that critically analyzes language models addressing some interdisciplinary aspects, finishing with concluding remarks.


## 2. Deep Neural Networks


Several recent advances in the field of Natural Language Processing (NLP) are attributed to the mellowing of Deep Neural Network models, which are more sophisticated types of Artificial Neural Networks.
This section describes some relevant issues in Neural Network architectures, followed in the subsequent section by Language Models in the context of such networks


### 2.1 Artificial Neural Networks


An artificial neural network — a computational abstraction inspired by the biological nervous system — is an interconnected network of artificial neurons organized in layers. Typically, neural networks perform Supervised Learning, where the network receives successive sets of pre-labeled training samples and must infer the corresponding output for each input sample. For example, a neural network can be trained to recognize cancerous tumors in computed tomography images based on labeled images previously presented to the model. After this training phase, the neural network is capable of making inferences about new images that were not observed by the model during its network training<sup>[[4](#ref4)]</sup>.


#### Example - Sentiment Analysis through Neural Networks




Sentiment Analysis through neural networks is an NLP task whose objective is to classify sentences based on their sentiment polarity **`C={Positive, Negative, Neutral}`**. In the training phase, iteratively the network is fed by pairs of sentences and labels, in the format **[sentence,label]** contained in the training set. In each training step, let **s** be the sentence to be classified, **`y`** the corresponding label, and **`h`** the output of the classification, representing the class inferred for **`s`** by the algorithm. The sentence **`s`** is represented by a feature vector **`x=(x1, x2, ..., xn)`**. Let **`\theta = (\theta_1,\theta_2,...,\theta_{m})`** be a vector of parameters (weights) of each neuron.
Classification works as follows. Vector **x** is propagated through the network's layers, adjusting the parameters **\theta** of each neuron based on their contribution to constructing the output **y**. Figure <sup>[[1](#neural_network)]</sup> illustrates a neural network classifying the sentence "I liked this movie". The neural network produces an output vector **`o=(o_{1, o_{2}, o_3)`** containing the algorithm's hypotheses regarding the probabilities of the sentence belonging to each of the possible classes in **C**, where the highest one is chosen as the algorithm’s hypothesis **`h=positive`**.

![image](/assets/blog/neural_network.jpg)
*<a id="neural_network"> Figure 1: Neural network performing sentiment analysis. Adapted from Kubat [[4](#ref4)]</a>.*

Each neuron in the network has a transfer function (or activation function) **f(\Sigma)** that operates on the weight parameter **\theta_{i}** of the neuron and the input feature $**x_{i}**$, as illustrated in Figure~\ref{fig:artificial-neuron}. Several transfer functions can be employed, including the sigmoid function:

# References
[1] <a id="ref1"></a> Manning, C., Schütze, H., 1999, **Foundations of statistical natural language processing**, MIT Press.


[2] <a id="ref2"></a>Barlas, Y., Carpenter, S., 1900, **Philosophical roots of model validation: two paradigms**, Wiley Online Library.


[3] <a id="ref3"></a>Goertzel, B., 2013, **Chaotic logic: Language, thought, and reality from the perspective of complex systems science**, Springer Science \& Business Media.


[4] <a id="ref4"></a>Kubat, M., 2017, **An introduction to machine learning**, Springer.
