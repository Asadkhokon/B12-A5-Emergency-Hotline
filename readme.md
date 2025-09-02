### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
answer:
>getElementByID() work with ID only
> getElementsByClassNam work with Class only
>querySelector work with Css selector only.
>querySelectorAll work with Css selector and return static nodeList.

2.How do you **create and insert a new element into the DOM**?
Answer: 
>Const newEle=document.createElement('div')
newEle.id='my-new-div';
newEle.className='container';
newEle.textContent='Hello, PH';

newEle.innerHTML='Hello PH';
>Insert Menhod.
const container=document.getElementById('container');
container.append(newEle, 'test text',anotherElement);
container.appendChild(newele);

3. What is **Event Bubbling** and how does it work?
Answer:
>Event Bubbling is fundamental concept of javascript DOM. here Event starts form the target element that triggered it.
Working process>>>>
>Event occured on a specific target element.
>Event handle on the target element and execute.
>Event bubble up on the parent element.
>event handlers on parent are execute.
>Process continue up to the document root.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer:
>Event delegation is a powerful technique in javaScript that allows to handle events efficiently by leveraging event bubbling.
>By listening for events on a parent element, its possible to handle events from multiple child elements with a single event handler.
5. What is the difference between **preventDefault() and stopPropagation()** methods?
>preventDefault() Prevents browsers default behavior associated with and event.
>StopPropagation() Stops the event from bubbling up the DOM tree.