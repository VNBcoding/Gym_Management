-- MySQL dump 10.13  Distrib 8.0.39, for macos14 (arm64)
--
-- Host: localhost    Database: Gym
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `class`
--

DROP TABLE IF EXISTS `class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `class` (
  `c_ID` int NOT NULL AUTO_INCREMENT,
  `class_name` varchar(100) NOT NULL,
  `class_img` varchar(255) DEFAULT NULL,
  `seats` int NOT NULL DEFAULT '50',
  `location` varchar(100) DEFAULT NULL,
  `s_time` time DEFAULT NULL,
  `e_time` time DEFAULT NULL,
  `pt_ID` int DEFAULT NULL,
  PRIMARY KEY (`c_ID`),
  KEY `pt_ID` (`pt_ID`),
  CONSTRAINT `class_ibfk_1` FOREIGN KEY (`pt_ID`) REFERENCES `personal_trainer` (`pt_ID`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class`
--

LOCK TABLES `class` WRITE;
/*!40000 ALTER TABLE `class` DISABLE KEYS */;
INSERT INTO `class` VALUES (101,'Yoga Basics','image/yoga.jpg',20,'Room 1','09:00:00','10:00:00',201),(102,'Advanced Pilates',NULL,15,'Room 2','10:30:00','11:30:00',NULL),(103,'Strength Training','image/gym.jpg',25,'Room 3','12:00:00','13:00:00',202),(104,'Cardio Blast',NULL,30,'Room 4','14:00:00','15:00:00',203),(105,'HIIT Express',NULL,20,'Room 5','15:30:00','16:30:00',NULL),(106,'Zumba Dance',NULL,25,'Room 6','17:00:00','18:00:00',204);
/*!40000 ALTER TABLE `class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `membership`
--

DROP TABLE IF EXISTS `membership`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `membership` (
  `m_id` int NOT NULL AUTO_INCREMENT,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`m_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `membership`
--

LOCK TABLES `membership` WRITE;
/*!40000 ALTER TABLE `membership` DISABLE KEYS */;
INSERT INTO `membership` VALUES (1,'2024-01-15','2024-12-31',NULL),(2,'2023-01-10','2023-12-31',NULL),(3,'2024-02-01','2024-12-31',NULL),(4,'2024-03-01','2024-12-31',NULL),(5,'2024-04-01','2024-12-31',NULL),(6,'2024-05-01','2024-12-31',NULL),(7,'2024-11-24','2024-12-24','rukikuchi123'),(8,'2024-11-24','2024-12-01','rukikuchi1234'),(9,'2024-11-24','2024-12-01','rukikuchi1234'),(10,'2024-11-24','2024-12-01','rukikuchi1234');
/*!40000 ALTER TABLE `membership` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `p_ID` int NOT NULL AUTO_INCREMENT,
  `method` varchar(50) DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `planname` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`p_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
INSERT INTO `payments` VALUES (13,'Credit',499.00,'Annual','rukikuchi123'),(14,'Credit',19.00,'Weekly','rukikuchi123'),(15,'Credit',59.00,'Monthly','rukikuchi123'),(16,'Credit',19.00,'Weekly','rukikuchi1234'),(17,'Credit',19.00,'Weekly','rukikuchi1234'),(18,'Credit',19.00,'Weekly','rukikuchi1234');
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_trainer`
--

DROP TABLE IF EXISTS `personal_trainer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_trainer` (
  `pt_ID` int NOT NULL AUTO_INCREMENT,
  `trainer_name` varchar(100) DEFAULT NULL,
  `specialty` varchar(255) NOT NULL,
  `availability` varchar(255) NOT NULL,
  `trainer_image` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`pt_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=207 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_trainer`
--

LOCK TABLES `personal_trainer` WRITE;
/*!40000 ALTER TABLE `personal_trainer` DISABLE KEYS */;
INSERT INTO `personal_trainer` VALUES (201,'Chris Evans','Strength Training','Monday-Friday, 9 AM to 5 PM','image/john-smith.jpg','905-721-8668','Chris.Evans@gmail.com'),(202,'Jessica Lee','Yoga','Monday, Wednesday, Friday, 7 AM to 12 PM','image/sarah-johnson.jpg','905-721-1234','Jessica.Lee@gmail.com'),(203,'Michael Johnson','Cardio Blast','Tuesday-Thursday, 10 AM to 6 PM','image/michael-lee.jpg','905-721-5678','Michael.Johnson@gmail.com'),(204,'Sarah Brown','Nutrition','Saturday-Sunday, 8 AM to 4 PM','image/emily-brown.jpg','905-721-8765','Sarah.Brown@gmail.com'),(205,'Tom Wilson','HIIT Express','Monday-Friday, 6 PM to 9 PM','image/david-clark.jpg','905-721-4321','Tom.Wilson@gmail.com'),(206,'Linda Taylor','Zumba Dance','Monday-Friday, 6 PM to 9 PM','image/linda.jpg','905-721-7890','Linda.Taylor@gmail.com');
/*!40000 ALTER TABLE `personal_trainer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plan`
--

DROP TABLE IF EXISTS `plan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plan` (
  `pl_ID` int NOT NULL AUTO_INCREMENT,
  `plan_name` varchar(50) DEFAULT NULL,
  `duration` varchar(50) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`pl_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plan`
--

LOCK TABLES `plan` WRITE;
/*!40000 ALTER TABLE `plan` DISABLE KEYS */;
INSERT INTO `plan` VALUES (1,'Weekly','1 week',19.99),(2,'Monthly','1 month',59.99),(3,'Annual','12 months',499.99);
/*!40000 ALTER TABLE `plan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UserRegisterinClass`
--

DROP TABLE IF EXISTS `UserRegisterinClass`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `UserRegisterinClass` (
  `c_id` int NOT NULL,
  `username` varchar(45) NOT NULL,
  PRIMARY KEY (`c_id`,`username`),
  KEY `fk_username` (`username`),
  CONSTRAINT `fk_class_id` FOREIGN KEY (`c_id`) REFERENCES `class` (`c_ID`) ON DELETE CASCADE,
  CONSTRAINT `fk_username` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserRegisterinClass`
--

LOCK TABLES `UserRegisterinClass` WRITE;
/*!40000 ALTER TABLE `UserRegisterinClass` DISABLE KEYS */;
/*!40000 ALTER TABLE `UserRegisterinClass` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `u_ID` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `u_status` varchar(50) DEFAULT NULL,
  `pt_ID` int DEFAULT NULL,
  `u_password` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`u_ID`),
  UNIQUE KEY `username` (`username`),
  KEY `pt_ID` (`pt_ID`),
  CONSTRAINT `users_ibfk_2` FOREIGN KEY (`pt_ID`) REFERENCES `personal_trainer` (`pt_ID`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Rukshan.B','Active',201,'Rukshan123'),(2,'Vinujen.D','Inactive',NULL,'Vinujen123'),(3,'Sufyan.M','Active',202,'Sufyan123'),(4,'Salum.K','Pending',NULL,'Salum123'),(5,'Viet.B','Active',201,'Viet123'),(6,'Khaleel.M','Active',203,'Khaleel123'),(21,'rukikuchi789',NULL,NULL,'123'),(23,'SDFSF',NULL,NULL,'$2b$10$462FBk/FEXDXpUKA2PSP5.7eisMr3htgjfvT0cMqxIJDGzKP5foz6'),(24,'rukikuchi78910',NULL,NULL,'$2b$10$yJn6cNBCCU84C72xAgg5ROmH4q1XolMn7jQHERqVgwN6KF6aoc2Zu'),(25,'rukikuchi123',NULL,NULL,'$2b$10$oBXkZLUgSrosXygoVRjiVeAgTGT.0YXGbdZSY0IsVPvmGqLEPlvxO'),(26,'rukikuchi789123',NULL,NULL,'$2b$10$eelYwDcnk.QrnUD8/OqUn.YbdsaArPAvzQQ5jG.YFJgwxBvPlw2gq'),(27,'',NULL,NULL,'$2b$10$8e18dP3by1LlTMWQ8UFCFO.oRlyjzqzZCtJkCzer4ey5q9lp99uEa'),(28,'rukikuchi1234',NULL,NULL,'$2b$10$/ANzxjrCit3ThZjaCSqF3ecuuycOrktHQTW2D4fEq8SUwtBFlKdP6');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-24 21:39:42
