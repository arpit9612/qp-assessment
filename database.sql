CREATE DATABASE  IF NOT EXISTS `grocery` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `grocery`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: grocery
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `groceryitem`
--

DROP TABLE IF EXISTS `groceryitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `groceryitem` (
  `groceryItemId` int NOT NULL AUTO_INCREMENT,
  `groceryItemName` varchar(200) NOT NULL,
  `groceryItemPrice` varchar(45) NOT NULL,
  `piecesAvailable` int NOT NULL,
  `dateCreated` datetime DEFAULT CURRENT_TIMESTAMP,
  `dateDeleted` datetime DEFAULT NULL,
  `isDeleted` tinyint DEFAULT '0',
  PRIMARY KEY (`groceryItemId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groceryitem`
--

LOCK TABLES `groceryitem` WRITE;
/*!40000 ALTER TABLE `groceryitem` DISABLE KEYS */;
INSERT INTO `groceryitem` VALUES (1,'Noodels','20',30,'2024-05-04 23:57:04',NULL,0),(2,'Orange Juice Cans','50',80,'2024-05-04 20:25:29',NULL,0),(3,'Beer','20',100,'2024-05-04 20:27:50','2024-05-04 20:39:23',1);
/*!40000 ALTER TABLE `groceryitem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `groceryorders`
--

DROP TABLE IF EXISTS `groceryorders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `groceryorders` (
  `orderId` int NOT NULL AUTO_INCREMENT,
  `groceryItemId` int NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`orderId`),
  KEY `groceryItem_idx` (`groceryItemId`),
  CONSTRAINT `groceryItem` FOREIGN KEY (`groceryItemId`) REFERENCES `groceryitem` (`groceryItemId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groceryorders`
--

LOCK TABLES `groceryorders` WRITE;
/*!40000 ALTER TABLE `groceryorders` DISABLE KEYS */;
INSERT INTO `groceryorders` VALUES (1,1,10),(2,2,10),(3,1,10),(4,2,10);
/*!40000 ALTER TABLE `groceryorders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-05  2:28:54
