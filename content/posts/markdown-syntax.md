---
author: "84piranhas"
title: "Markdown syntax"
date: "2021-01-01"
summary: "A resume of the Markdown syntax we use, with corresponding HTML."
tags: ["english", "code", "markdown", "html"]
hideMeta: true
weight: 1
showtoc: true
tocopen: true
url: "home" # by default = "posts/{title}"
aliases: ["testalias"]
series: ["code"]
categories: ["code2"]
---


A resume of the Markdown syntax we use.
It is not an exhaustive list as we skip some alternatives, here are the preferred ones.

reference: https://www.markdownguide.org/basic-syntax/

# HEADERS
# Heading level 1
``` md
markdown:
# Heading level 1
```
``` html
html:
<h1 id="heading-level-1">Heading level 1<a hidden="" class="anchor" aria-hidden="true" href="#heading-level-1">#</a></h1>
```

## Heading level 2
``` md
markdown:
## Heading level 2
```
``` html
html:
<h2 id="heading-level-2">Heading level 2<a hidden="" class="anchor" aria-hidden="true" href="#heading-level-2">#</a></h2>
```

### Heading level 3
``` md
markdown:
### Heading level 3
```
``` html
html:
<h3 id="heading-level-3">Heading level 3<a hidden="" class="anchor" aria-hidden="true" href="#heading-level-3">#</a></h3>
```

#### Heading level 4
``` md
markdown:
#### Heading level 4
```
``` html
html:
<h4 id="heading-level-4">Heading level 4<a hidden="" class="anchor" aria-hidden="true" href="#heading-level-4">#</a></h4>
```

##### Heading level 5
``` md
markdown:
##### Heading level 5
```
``` html
html:
<h5 id="heading-level-5">Heading level 5<a hidden="" class="anchor" aria-hidden="true" href="#heading-level-5">#</a></h5>
```

###### Heading level 6
``` md
markdown:
###### Heading level 6
```
``` html
html:
<h6 id="heading-level-6">Heading level 6<a hidden="" class="anchor" aria-hidden="true" href="#heading-level-6">#</a></h6>
```

# EMPHASIS

**Bold**
``` md
markdown:
**Bold**
```
``` html
html:
<strong>Bold</strong>
```
*Italic*
``` md
markdown:
*Italic*
```
``` html
html:
<em>Italic</em>
```
***Bold and italic***
``` md
markdown:
***Bold and italic***
```
``` html
html:
<em><strong>Bold and italic</strong></em>
```

# LISTS

## Ordered list

1. First item
2. Second item
3. Third item
``` md
markdown:
1. First item
2. Second item
3. Third item
```
``` html
html:
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
```

## Unordered list

-   List item
-   Another item
-   And another item
``` md
markdown:
-   List item
-   Another item
-   And another item
```
``` html
html:
<ul>
    <li>List item</li>
    <li>Another item</li>
    <li>And another item</li>
</ul>
```

## Nested lists

-   Fruit
    -   Apple
    -   Orange
    -   Banana
-   Dairy
    -   Milk
    -   Cheese
        - Camembert
        - Comté
        - Saint
            - Marcellin
            - Félicien
``` md
markdown:
-   Fruit
    -   Apple
    -   Orange
    -   Banana
-   Dairy
    -   Milk
    -   Cheese
        - Camembert
        - Comté
        - Saint
            - Marcellin
            - Félicien
```
``` html
html:
<ul>
    <li>Fruit
        <ul>
            <li>Apple</li>
            <li>Orange</li>
            <li>Banana</li>
        </ul>
    </li>
    <li>Dairy
        <ul>
            <li>Milk</li>
            <li>Cheese
                <ul>
                    <li>Camembert</li>
                    <li>Comté</li>
                    <li>Saint
                        <ul>
                            <li>Marcellin</li>
                            <li>Félicien</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
</ul>
```

1. First item
    - item A
    - item B
        1. first one
        2. second one
2. Second item
``` md
markdown:
1. First item
    - item A
    - item B
        1. first one
        2. second one
2. Second item
```
``` html
html:
<ol>
    <li>First item
        <ul>
            <li>item A</li>
            <li>item B
                <ol>
                    <li>first one</li>
                    <li>second one</li>
                </ol>
            </li>
        </ul>
    </li>
    <li>Second item</li>
</ol>
```

## Bullet points

* bullet point by star
- bullet point by hyphen
``` md
markdown:
* bullet point by star
- bullet point by hyphen
```
``` html
html:
<ul>
    <li>bullet point by star</li>
</ul>
<ul>
    <li>bullet point by hyphen</li>
</ul>
```

# LINKS

[Markdown guide](https://www.markdownguide.org/basic-syntax/)

[Hugo Theme: PaperMod](https://themes.gohugo.io/hugo-papermod/) 
``` md
markdown:
[Markdown guide](https://www.markdownguide.org/basic-syntax/)

[Hugo Theme: PaperMod](https://themes.gohugo.io/hugo-papermod/) 
```
``` html
html:
<p>
    <a href="https://www.markdownguide.org/basic-syntax/">Markdown guide</a>
</p>
<p>
    <a href="https://themes.gohugo.io/hugo-papermod/">Hugo Theme: PaperMod</a>
</p>
```

<a href="https://duckduckgo.com/" target="_blank">DuckDuckGo outside this window</a>
``` md
markdown:
NOT NATIVE
```
``` html
html:
<a href="https://duckduckgo.com/" target="_blank">DuckDuckGo outside this window</a>
```

# PARAGRAPHS AND LINES

Paragraph 0: use a blank line to separate one or more lines of text.

Paragraph 1

Paragraph 2
``` md
markdown:
Paragraph 0: use a blank line to separate one or more lines of text.

Paragraph 1

Paragraph 2
```
``` html
html:
<p>Paragraph 0: use a blank line to separate one or more lines of text.</p>
<p>Paragraph 1</p>
<p>Paragraph 2</p>
```

To create a line break, end a line with two or more spaces,  
and then type return.
``` md
markdown:
To create a line break, end a line with two or more spaces,  
and then type return.
```
``` html
html:
<p>To create a line break, end a line with two or more spaces,<br>
and then type return.</p>
```

# BLOCKQUOTES

> The Blockquotes
>> can be nested.
> They work with other elements,
> - as a list
>> of **important elements** and *others* for example
``` md
markdown:
> The Blockquotes
>> can be nested.
> They work with other elements,
> - as a list
>> of **important elements** and *others* for example
```
``` html
html:
<blockquote>
    <p>The Blockquotes</p>
    <blockquote>
        <p>can be nested.
        They work with other elements,</p>
    </blockquote>
    <ul>
        <li>as a list</li>
    </ul>
    <blockquote>
        <p>of <strong>important elements</strong> and <em>others</em> for example</p>
    </blockquote>
</blockquote>
```

