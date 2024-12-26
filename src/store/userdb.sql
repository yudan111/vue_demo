/*
Navicat MySQL Data Transfer

Source Server         : x1
Source Server Version : 80039
Source Host           : localhost:3306
Source Database       : userdb

Target Server Type    : MYSQL
Target Server Version : 80039
File Encoding         : 65001

Date: 2024-12-26 23:06:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(10) NOT NULL,
  `password` varchar(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '3', '3');
INSERT INTO `users` VALUES ('2', '1', '1');

-- ----------------------------
-- Table structure for users1
-- ----------------------------
DROP TABLE IF EXISTS `users1`;
CREATE TABLE `users1` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(10) NOT NULL,
  `password` varchar(10) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of users1
-- ----------------------------
INSERT INTO `users1` VALUES ('1', '1', '1', '2024-12-26 15:16:49', '0');
INSERT INTO `users1` VALUES ('2', '2', '2', '2024-12-26 15:35:02', '0');
INSERT INTO `users1` VALUES ('3', 'admin', '123456', '2024-12-26 15:35:53', '1');
