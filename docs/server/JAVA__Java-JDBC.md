---
title: Java JDBC
date: 2018-05-01 14:45:20
publish: true
categories:
  - 后端开发
tags: Java
---

## JDBC（Java DataBase Connection）
```java
// 加载驱动
Class.forName("com.mysql.jdbc.Driver");

// 建立数据库连接
Connection = DriverManager.getConnection("jdbc；mysql://localhost:3306/Demo?useUnicode=true&characterEncoding=UTF8");

// 创建执行SQL的对象
Statement st = conn.createStatement();

// 提交 SQL 语句，并处理结果集
st.executeUpdate("SQL code");  //增删改
st.executeQuery("SQL code");   //查询

// 关闭数据库连接
st.close();
conn.close();
```
## DBHelper 数据库连接类
```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
* JDBC Utils
* @author
*/
public class DBHelper {
  
  // 定义常量字符串存放数据库连接的信息
  private static final String USER = "root", PASSWORD = "root";
  private static final String URL = "jdbc:mysql://localhost:3306/Demo?useUnicode=true&characterEncoding=UTF8";
  
  /**
  * 连接数据库 Connection database
  * @return
  */
  public static Connection init() {
    Connection conn = null;
    try {
      // 加载驱动
      Class.forName("com.mysql.jdbc.Driver");			
      // 在驱动管理器的基础上获得连接
      conn = DriverManager.getConnection(URL, USER, PASSWORD);
    } catch (ClassNotFoundException e) {
      e.printStackTrace();
    } catch (SQLException e) {
      e.printStackTrace();
    }
    return conn;
  }

  /**
  * 关闭连接  Close database
  * @param conn
  */
  public static void close(Connection conn) {
    if (conn != null) {
      try {
        conn.close();
      } catch (SQLException e) {
        e.printStackTrace();
      }
    }
  }

  /**
  * 设置SQL语句中不定量传参 
  * @param ps
  * @param values
  */
  private static void setParam(PreparedStatement ps, Object... values) {
    // 判断SQL语句中是否有条件
    if (values != null && values.length > 0) {
      // 循环设置参数
      for (int i = 0; i < values.length; i++) {
        try {
          ps.setObject(i + 1, values[i]);
        } catch (SQLException e) {
          e.printStackTrace();
        }
      }
    }
  }

  /**
  * 执行 insert delete update
  * @param conn
  * @param sql
  * @param values
  * @return
  */
  public static int executeUpdate(Connection conn, String sql, Object... values) {
    int alter = 0;
    try {
      // 编写SQL语句
      PreparedStatement ps = conn.prepareStatement(sql);
      // 设置参数
      setParam(ps, values);
      // 执行SQL语句
      alter = ps.executeUpdate();			
    } catch (SQLException e) {
      e.printStackTrace();
    }
    return alter;
  }

  /**
  * 执行 select
  * @param conn
  * @param sql
  * @param values
  * @return
  */
  public static ResultSet executeQuery(Connection conn, String sql, Object... values) {
    ResultSet rs = null;
    try {
      PreparedStatement ps = conn.prepareStatement(sql);
      setParam(ps, values);
      rs = ps.executeQuery();
    } catch (SQLException e) {
      e.printStackTrace();
    }
    return rs;
  }
}
```
## 使用示例
- insert
```java
Connection conn = DBUtils.init();
String sql = "insert into user(account,password) values (?,?);";
DBHelper.executeUpdate(conn, sql, "account", "password")
```
- delete
```java
Connection conn = DBUtils.init();
String sql = "delete from user where id = ?";
DBUtils.executeUpdate(conn, sql, id);
```
- select
```java
Connection conn = DBUtils.init();
String sql = "select * from user where account = ?";
ResultSet rs = DBHelper.executeQuery(conn, sql, "account")
```
- update
```java
Connection conn = DBUtils.init();
String sql = "update user set account = ?,password = ? where id = ?";
DBUtils.executeUpdate(conn, sql, "account", "password");
```
