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
# A bibliographic survey of Neural Language Models


## Abstract


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
## 1. Introduction




  Natural Language Processing (NLP) is a field of Computer Science whose goal is to convert human language into a representation that is interpretable by computers. It is an interdisciplinary research area that incorporates concepts from various other fields, such as Statistics and Linguistics.


Manning and Schütze<sup>[[1](#ref1)]</sup>
classify NLP methods into statistical and non-statistical approaches. Statistical approaches rely on patterns that commonly occur in a language, while non-statistical approaches focus on mapping and computationally implementing the rules that structure the language. The distinction between statistical and non-statistical approaches has roots grounded in the philosophical debate surrounding the perspectives of Rationalism and Empiricism<sup>[[1](#ref1)]</sup>. 




## Referências
1. <a id="ref1"></a> Autor, *Título*, Ano.


###### This is a Heading h6
## Emphasis


*This text will be italic*  
_This will also be italic_


**This text will be bold**  
__This will also be bold__


_You **can** combine them_


## Lists


### Unordered


* Item 1
* Item 2
* Item 2a
* Item 2b
    * Item 3a
    * Item 3b


### Ordered


1. Item 1
2. Item 2
3. Item 3
    1. Item 3a
    2. Item 3b


## Images


![This is an alt text.](/image/Markdown-mark.svg "This is a sample image.")


## Links


You may be using [Markdown Live Preview](https://markdownlivepreview.com/).


## Blockquotes


> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.


## Tables


| Left columns  | Right columns |
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |


## Blocks of code


```
let message = 'Hello world';
alert(message);
```


## Inline code


This web site is using `markedjs/marked`.
