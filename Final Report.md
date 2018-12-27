# INFO-4302-MOBILE-APPLICATION-DEVELOPMENT-PROJRCT
 
## Final Report FOR PROJECT DEVELOPMENT 

## Group Name
**ADMIN**

## Group Members
**MOHAMED MAHMUD MOHAMED HUSSEIN 			1317273,**

**ABOULJID YOUNES 						1817463,**

**WIDYAN KAMILI 							1327833,**

**AHMAD HAIDAR ABDULLAH ALATAS 			1322349**

## LECTURER:
**Assoc. Prof. Dr. MUHAMAD SADRY ABU SEMAN MUHAMAD SADRY ABU SEMAN**

## SUBMISSION DATE:
**28 DECEMBER 2018**

### 1.1 INTRODUCTION 
The purpose of this proposal is to provide a report for our project base on our plan and our activity in developing. The project is about a mobile application that can help IIUM security’s officers to identify the students and the staff by using the camera in the mobile and match it with their data in the database. The application can help also in preventing outsiders and fake students.  
 	 
### 1.2 PROBLEM DESCRIPTION 
**1.2.1 Background of the problem** 
Most of hardship of the security guards when they need to check every person entering the university by checking their matric card and for the outsiders they need to resent an id to enter the university. Most of the time when it is crowded, the guards will not check all the intruders since they are a lot and no time to go through all the matric cards.   
 
**1.2.2 Problem Statement**   
As far as we concern there is no mobile application that provides the user with such features as the system proposed. So, this might be the first system can give the officer a help in recognizing who is real student and who is not a student in lesser time and more efficient than manually checking. Plus, it can help those who forgot or lost their matric cards to enter the university without having any problem. 	 
 
### 1.3 PROJECT OBJECTIVE 
•	This project is aimed to proffer a system that can be easy to use and efficient in finding information about student, staff or outsider.
•	To develop a mobile application can identify student and match their face in our database.
•	Help IIUM security by providing an app can be used to recognize outsider and register them to IIUM visitor’s system 
•	Help students to prove if there are registered in the university in case of losing or forgetting their matric cards.
 
 
### 1.4 PROJECT SCOPE 
 
**1.4.1 Scope**
The application that will be developed for IIUM community where the scope will be
local and for a testing purpose the data will contain 5 records as a student to test
and one user (security Gard)
**1.4.2 Targeted User**
Our targeted user divided to two main category users will use the app as admin in this project they will by IIUM security officer and security guards. On the other hand, users who will be scanned to find their information in our database. Student, staff and outsider where those who filed to identified as student or staff, they will be registered as visitor’s.
 
**1.4.3 Specific Platform** 
To build this project we are trying to apply all the knowledge we gain in our class by using react native framework for writing the mobile application codes for iOS and android also using the APIs platform to access the phone camera and other features. The software is needed to develop the app are android studio to use the in-building function and simulate the app on android studio emulator, visual studio code to write our code and tested, Node.js, JDK 1.8 and react native documentation to build a cross-platform app and re-use the codes that will help us. 
The application will be tested and used on a real mobile phone as hardware is required. This is a demo version where we will create our own database but, in the future, there is a specific requirement where the application need to access IIUM database   
### 1.5 CONSTRAINTS 
There are several constraints of this project. We will list the ones that we expect before starting the project. However, there might be some in the future, which they will be mentioned in further reports.
First Constraint is Security. Once we finish the app, it will not be secured against all attacks either in the database server or the actual layout of the app, through the network lines. 
The second constraint is the performance. We will most likely brute force most of our algorithm, most of them will have a big O of O (n²). Which will cause a slow process if the data is large and consume rather more time than an effective algorithm. 
The third constraint is the lack of spare time: most of the students inside this group have their FYP projects that they should concentrate on. Which leaves us with less time to schedule group meetings and less time to give it a 100% of our effort.
 
### 1.6 PROJECT STAGES 
For this project we have three weeks for finish it and present the project. So, we decided to work in parallel the project. Our group is composed of four members and the project is composed in 3 parts.
The first part which is the database. 1 student will handle the database using the firebase platform. Where all data of users is stored there. In our project we will work with a mock up database in a small scale then if it is worth it we can expand it to a larger scale. 
The second part is the user interface. This part is also handled by 1 student. He will have the freedom to choose the UI toolkit in which he feels comfortable and confident. Plus creating logos and design in adobe creative studio for the project. In order to give it a professional look and user-friendly feel and appeal.
The third and the last part is the logical algorithms and coding. Since this part is the largest it will be handled by 2 students. They will share functions equally and discuss their progress together, help each other if a function has some dependencies to another one handled by another student.
Then in the final week, the project will be wrapped up and compiled into one big project for presentation.
And since the project will be worked on in parallel, so each week a report will be submitted in the readme file in GitHub repository regarding the progress of each part of the project.  
 
### 1.7 SIGNIFICANCE OF THE PROJECT 
This project plays a huge role in the development of the security system inside the university. And could be applied to other spectrum of industries like companies, call centres, fellowships and many more, depending on the need of it. Since we will use new technology which is face recognition. There is no need to waste time in checking the matric number in our case. And avoid the loophole of passing student cards to guest students in order to enter the campus of the university as regular students and leave whenever they want. Each face is unique, and each face has its own faceprint. However, this does not mean that guest people are not allowed in the university. If a guest is spotted by not finding him in the database, there is a visiting function which will allow him to stay until 6 pm and then if there is no check out. Then a problem will be notified in the app. So, it eliminates the waste of time and human interaction. Everything will be handled by the machine though our algorithms. Which is the road we are heading to as an industry of computer science and information technology. 
 
### 1.8 SUMMARY 
This project is aimed to help IIUM authorities to identify their students and staff through a mobile application use the function of face recognition to match the scanned face with IIUM database system and return the information about the induvial who trying to enter the university. This application will be used by IIUM security officers in case of the data not match the scanned face security officers can register in an outsider as a visitor and save the data to a databased used by all the IIUM community. Limitation of time and resources may affect the project out comes. 

### 2.1 Development Stage
In this project the developers used a react native language to create the app. The database used in the development is Firebase provided by Google.
The app’s front page will show the logo and two buttons, the first one is to check the student by using the camera recognition and check the database to show the student’s information. The other button is to register the visitors in the system (Database), to be identified by the other security officers.
In case the face recognition did not work, the officer has another method to check by inserting the matric number in provided text field to confirm whether the student is exists in the database or not. 

**2.1.1 Functions**
-	Camera recognition
-	Database connector 
-	Form, to register new visitor to the system
-	Retrieve the data from database
-	Router, to connect the pages. 

### 2.2 Functions Screenshots


### 2.3 Output Screenshots
![alt text](https://github.com/MH1036/INFO-4302-MOBILE-APPLICATION-DEVELOPMENT-PROJRCT/tree/master/screenshots/1.jpeg)
Main Page of the application

![alt text](https://github.com/MH1036/INFO-4302-MOBILE-APPLICATION-DEVELOPMENT-PROJRCT/tree/master/screenshots/2.jpeg)
Form page to register the visitor

![alt text](https://github.com/MH1036/INFO-4302-MOBILE-APPLICATION-DEVELOPMENT-PROJRCT/tree/master/screenshots/3.jpeg)
Camera to detect the student's face

![alt text](https://github.com/MH1036/INFO-4302-MOBILE-APPLICATION-DEVELOPMENT-PROJRCT/tree/master/screenshots/4.jpeg)
![alt text](https://github.com/MH1036/INFO-4302-MOBILE-APPLICATION-DEVELOPMENT-PROJRCT/tree/master/screenshots/5.jpeg)
Shows the inserting, and the data after being stored in the database
