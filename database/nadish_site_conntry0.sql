-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: nadish_site
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `conntry`
--

DROP TABLE IF EXISTS `conntry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `conntry` (
  `id` int NOT NULL,
  `title` varchar(45) DEFAULT NULL,
  `create_by` int NOT NULL,
  `create_date` timestamp NULL DEFAULT (now()),
  `update_date` timestamp NULL DEFAULT (now()),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conntry`
--

LOCK TABLES `conntry` WRITE;
/*!40000 ALTER TABLE `conntry` DISABLE KEYS */;
INSERT INTO `conntry` VALUES (0,'Micronesia',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(1,'Jersey',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(2,'Djibouti',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(3,'Afghanistan',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(4,'Poland',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(5,'Norfolk Island',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(6,'Qatar',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(7,'Suriname',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(8,'Fiji',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(9,'Tokelau',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(10,'French Guiana',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(11,'United States of America',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(12,'Tokelau',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(13,'Brunei Darussalam',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(14,'Korea',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(15,'Chad',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(16,'Jamaica',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(17,'San Marino',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(18,'Mongolia',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(19,'Cayman Islands',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(20,'Botswana',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(21,'Virgin Islands (British)',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(22,'South Africa',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(23,'Dominica',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(24,'Zimbabwe',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(25,'Monaco',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(26,'Romania',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(27,'Nepal',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(28,'Grenada',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(29,'Jamaica',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(30,'Martinique',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(31,'Singapore',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(32,'Afghanistan',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(33,'Croatia',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(34,'Switzerland',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(35,'Syrian Arab Republic',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(36,'Syrian Arab Republic',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(37,'Turkmenistan',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(38,'Sierra Leone',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(39,'Turkey',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(40,'Serbia',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(41,'Cameroon',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(42,'Italy',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(43,'Grenada',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(44,'El Salvador',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(45,'China',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(46,'Swaziland',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(47,'Iraq',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(48,'Sao Tome and Principe',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(49,'Pakistan',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(50,'Equatorial Guinea',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(51,'Denmark',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(52,'Czech Republic',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(53,'Uganda',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(54,'Aruba',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(55,'Hungary',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(56,'Belarus',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(57,'Sweden',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(58,'Bahrain',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(59,'Finland',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(60,'Antigua and Barbuda',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(61,'Cambodia',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(62,'Turks and Caicos Islands',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(63,'Madagascar',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(64,'Wallis and Futuna',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(65,'Bermuda',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(66,'Egypt',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(67,'Tunisia',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(68,'United States Minor Outlying Islands',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(69,'Eritrea',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(70,'Tunisia',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(71,'Indonesia',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(72,'Macao',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(73,'Bulgaria',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(74,'Saint Kitts and Nevis',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(75,'Hong Kong',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(76,'Sudan',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(77,'Brazil',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(78,'Senegal',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(79,'Tuvalu',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(80,'Albania',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(81,'Mauritius',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(82,'French Polynesia',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(83,'Madagascar',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(84,'San Marino',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(85,'Malaysia',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(86,'Poland',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(87,'Costa Rica',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(88,'Sao Tome and Principe',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(89,'France',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(90,'Korea',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(91,'Dominican Republic',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(92,'Pakistan',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(93,'Cabo Verde',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(94,'Chile',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(95,'Malaysia',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(96,'French Guiana',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(97,'New Caledonia',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(98,'Qatar',0,'2022-04-20 19:18:39','2022-04-20 19:19:11'),(99,'Swaziland',0,'2022-04-20 19:18:39','2022-04-20 19:19:11');
/*!40000 ALTER TABLE `conntry` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-02 18:14:40
