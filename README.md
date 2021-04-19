# Library-App
A simple implementation of classes and class extends to create a Library App where we can input different media types (Books, Movies, CDs) and store them in a Catalog, to later search for an item and do a check out or see if it is checked out.

These are the subclasses created for each media type:

![image](https://user-images.githubusercontent.com/77022076/115309880-bce44000-a121-11eb-8059-85156bc66895.png)
![image](https://user-images.githubusercontent.com/77022076/115309921-cc638900-a121-11eb-8ccb-153ff487bff4.png)
![image](https://user-images.githubusercontent.com/77022076/115309951-d6858780-a121-11eb-8ccb-108f8af0c448.png)

First I created a parent class called Media with all the properties and methods shared by the three types of media

![image](https://user-images.githubusercontent.com/77022076/115311480-91168980-a124-11eb-8494-25cd5576e3e9.png)

And here we can see the code for the sub classes with an additional property "type" to display diferent input boxes or information depending on the media type. Also a new method for CDs was added to shuffle the songs randomly.

![image](https://user-images.githubusercontent.com/77022076/115311567-b1464880-a124-11eb-9bf7-ac4d86b0988e.png)
![image](https://user-images.githubusercontent.com/77022076/115311617-cae79000-a124-11eb-9c9c-2420aeefa7b3.png)

Finally a class Catalog was added to store the media, and to add or remove elements by calling its methods.
![image](https://user-images.githubusercontent.com/77022076/115311652-db980600-a124-11eb-9c44-47989e588618.png)


I did this example app to test classes and class extends. But in order to see the outcome I created a simple layout where we can choose to see the catalog, search for an specific item and add a new item.

![image](https://user-images.githubusercontent.com/77022076/115312169-b657c780-a125-11eb-97c1-36d9cb4052f1.png)
![image](https://user-images.githubusercontent.com/77022076/115312217-c8396a80-a125-11eb-8c6c-470501c1033f.png)
![image](https://user-images.githubusercontent.com/77022076/115312269-e4d5a280-a125-11eb-9d01-1ec9d4a997da.png)
![image](https://user-images.githubusercontent.com/77022076/115312311-f5861880-a125-11eb-8738-55efbc26472d.png)


