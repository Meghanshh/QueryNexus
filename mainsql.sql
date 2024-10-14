DROP DATABASE hospital;
CREATE DATABASE hospital;
USE hospital;
CREATE TABLE patient (
patientID VARCHAR(20) PRIMARY KEY,
patient_name VARCHAR(20) NOT NULL,
DOB DATE NOT NULL,
gender CHAR(1) NOT NULL,
address VARCHAR(50),
contactNo VARCHAR(15),
email VARCHAR(20) UNIQUE ,
insurance_details VARCHAR(250));

CREATE TABLE department (
dept_ID VARCHAR(25) PRIMARY KEY,
dept_name VARCHAR(50) NOT NULL UNIQUE KEY );

CREATE TABLE doctor (
doctorID VARCHAR(20) PRIMARY KEY ,
doctorName CHAR(20) NOT NULL,
specialisation VARCHAR(50) NOT NULL ,
dept_name VARCHAR(50) NOT NULL,
FOREIGN KEY(dept_id) REFERENCES department(dept_id));

CREATE TABLE Bedding (
    bed_id INT PRIMARY KEY,
    bed_type VARCHAR(50),
    bed_status VARCHAR(20),
    patientID varchar(50),
    admission_date DATE,
    discharge_date DATE,
    cleaning_status VARCHAR(20),
    last_cleaned DATE,
    FOREIGN KEY (patientID) REFERENCES Patient(patientID)
);

CREATE TABLE Consultation (
app_id VARCHAR(50) PRIMARY KEY ,
app_date DATE NOT NULL,
app_time TIME NOT NULL,

labtestID VARCHAR(50) ,
test_name VARCHAR(25) ,
test_description CHAR(60) ,
test_cost DECIMAL(10.4) , 

pharmacyID 	VARCHAR(250) ,
medicine_name VARCHAR(250) ,
stock_quantity INT ,
price_per_unit DECIMAL(10.4) ,

billID VARCHAR(250) ,
total_amount DECIMAL(10.4) NOT NULL,
recordID VARCHAR(250) NOT NULL,
	
diagonsis CHAR(50) ,
treatment CHAR(250),
prescription VARCHAR(250),
record_date DATE NOT NULL,
patientID VARCHAR(50),
doctorID VARCHAR(20),
FOREIGN KEY(patientID) REFERENCES patient(patientID),
FOREIGN KEY(doctorID) REFERENCES doctor(doctorID)
);
INSERT INTO department ( dept_ID , dept_name)
VALUES ('DEN1234' , 'Dentistry'),
       ('DER5678' , 'Dermatology'),
       ('MED4567' , 'Medicine');
       
INSERT INTO doctor (doctorID ,doctorName ,specialisation , dept_name  )
VALUES('56ATDER', 'AnkitTanwer ', 'DERM' , 'Dermatology'  ),
	  ('23HSDEN', 'Hrithik Singh ' , 'DENTIST' , 'Dentistry' ),
      ('78RSMED', 'Rohit Singh' ,  'MED' , 'Medicine');

INSERT INTO patient (patientID,patient_name,DOB ,gender,address,contactNo,email,insurance_details )
VALUES ('AB1234' , 'Arun Kumar' , '2000-01-05', 'Male' , 'Vijay Nagar' , '78922759','arunkumar@gmail.com', 'TATA medical insurance'),
        ('CD5678' ,  'Ayushman ' , '2008-02-08', 'Male' , 'Kamla Nagar' , '73389472' , 'ayushman78@gmail.com', 'ICICI MEDICAL INSURANCE'),
        ('EF1278' , ' Mohan ' , '2005-07-10' , 'Male ' , 'GTB Nagar' , '86832789' , 'mohan24@gmail.com' , 'Groww Medical Insurance');
          

INSERT INTO Consultation (app_id,app_date,app_time,labtestID,test_name,test_description,test_cost,pharmacyID,medicine_name,stock_quantity,price_per_unit,billID,total_amount,recordID,diagonsis,treatment,prescription,record_date ,patientID ,doctorID)
           VALUES( 'RT76567' , '2024-08-23' , '16:02:00' , NULL , NULL ,NULL,NULL, 'GH137' ,  'anti-fungal cream' , '1' , '150.00' , 'QW23678' , '650.00','QW23567' , 'Fungal Infection', ' Use anti - fungal cream ' , 'Anti - Fungal cream ' , '2024-08-23' , 'AB1234', '56ATDER'),
                 ( 'GT90128' ,  '2024-07-24' , '15 :08:00' , 'CBC' , 'Total Blood Count' ,'Iron Less', '250' , 'TH327' , 'Iron Tablets' , '10' , '5' , 'JW87980', '250.00', 'JW87863' ,'Iron deffciency' ,'Use iron tablets for 1 month' , 'Iron tablets' , '2024-07-24' ,'CD5678', '23HSDEN'),
                 ( 'TH89709' , '2024-05-02' , '10:22:00' , NULL , NULL , NULL ,NULL,  'WT962' , 'Medicinal Paste' , '2' , '200' , 'HY78780' , '500.00' , 'HY78690', 'Dental Infection' , 'Use authorised toothpaste for 2 months' , ' Medicinal Toothpaste ' , '2024-05-02' , 'EF1278', '78RSMED');        
  SELECT * FROM doctor;
  SELECT * FROM patient;
  SELECT * FROM Consultation;
  
  SELECT * FROM patient;

  SELECT * FROM doctor WHERE dept_name = 'Dermatology';

  SELECT * FROM Consultation WHERE patientID = 'AB1234';
   
  SELECT * FROM patient WHERE insurance_details LIKE '%ICICI%';
  
  UPDATE patient SET contactNo = '99988877' WHERE patientID = 'EF1278';

  UPDATE doctor SET specialisation = 'DERMATOLOGIST' WHERE doctorID = '56ATDER';

  UPDATE Consultation SET total_amount = '700.00' WHERE app_id = 'RT76567';
  
  DELETE FROM Consultation WHERE app_id = 'TH89709';

  DELETE FROM doctor WHERE doctorID = '34PEDIA';
  
  DELETE FROM patient WHERE patientID = 'GH5678';
  
  SELECT * FROM Consultation WHERE doctorID = '56ATDER';

  UPDATE Bedding SET cleaning_status = 'Clean', last_cleaned = '2024-09-01' WHERE bed_id = 1;







