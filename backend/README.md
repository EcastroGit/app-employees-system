# Backend - Employee Management System

## Database specifications 

To ensure the functionality of this project, it is essential to have MySQL installed on your local machine, with a connection instance up and running. Additionally, it is necessary to create a database named __employee_system__ containing the specified tables. However, customization of the project can be implemented according to specific requirements.

### tables:

* __admins__
```sql
CREATE TABLE admins (`id` int NOT NULL, `name` varchar(255) DEFAULT NULL,  `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, PRIMARY KEY (`id`))
```

* __employees__
```sql
CREATE TABLE employees ( `id` int NOT NULL AUTO_INCREMENT,  `name` varchar(255) NOT NULL,  `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `address` varchar(255) DEFAULT NULL, `position` varchar(50) DEFAULT NULL, `department` varchar(50) DEFAULT NULL, `salary` int DEFAULT NULL, `image` varchar(150) DEFAULT NULL, PRIMARY KEY (`id`))
```

* __payroll_payments_department__
```sql
CREATE TABLE payroll_payments_department (  `id` int NOT NULL AUTO_INCREMENT,  `month` varchar(20) NOT NULL, `year` int NOT NULL, `sales` int NOT NULL, `IT` int NOT NULL, `management` int NOT NULL, PRIMARY KEY (`id`)) 
```

* __tasks__
```sql
CREATE TABLE tasks (`id` int NOT NULL AUTO_INCREMENT, `employee_id` int NOT NULL, `title` varchar(100) NOT NULL, `detail` varchar(300) NOT NULL, `deadline` date NOT NULL, PRIMARY KEY (`id`), KEY `employee_id` (`employee_id`), CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`))
```

* __total_payroll_payments__
```sql
CREATE TABLE total_payroll_payments (`id` int NOT NULL AUTO_INCREMENT, `month` varchar(20) NOT NULL, `year` int NOT NULL,  `USD` int NOT NULL, PRIMARY KEY (`id`))
```
