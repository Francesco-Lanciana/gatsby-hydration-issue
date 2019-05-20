## A repo to reproduce a hydration issue in Gatsby 🧐
When Gatsby builds it server side renders the site. When doing so certain things may not be defined, for example ```window```.

Let's say I have a variable that is ```true``` if the window exists, and ```false``` otherwise. This variable is then used to set the value of a data attribute, e.g. ```<div data-attribute={variable} />```. In this case when Gatsby builds the site it will set the attribute to ```false``` as it should since window is not defined at this point. However when we load the site in the browser and the component is executed, we would expect the value to now be ```true``` since the window now exists. In this case Gatsby seems to ignore the new value... I don't know why, but I will!!

To see the issue in practice run:
```npm run develop```

You should see that the text is green as the attribute is set to true. Now run:
```npm run build``` and ```npm run serve```

You will see that the text is red as the attribute is set to false. It should however be true.
