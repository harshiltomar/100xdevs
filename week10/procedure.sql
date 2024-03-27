-- Procedure is a named block of code, stored in the DB
-- SQL, DML, DDL, DCL, TCL
-- 

-- Postgre Syntax: 
CREATE PROCEDURE pr_name(p_name varchar, p_age int)
language plpsgl 
as $$
declare
      variable
begin
      procedure body -all logics
end;
$$

-- Microsoft SQL
CREATE OR ALTER PROCEDURE pr_name(@p_name varchar, @p_age int)
as
declare  @v_name int;
         @v_age int;
begin
      procedure body -all logics
end;
$$

-- MySQL

DELIMETER $$;

CREATE OR REPLACE PROCEDURE pr_name(p_name varchar, p_age int)
as 
declare v_name int;
        v_age int;
begin
      procedure body -all logics
end $$


--MsSQL
CREATE OR REPLACE PROCEDURE buy_products
AS 
DECLARE @v_product_code VARCHAR(20);
        @v_price FLOAT;
BEGIN

    SELECT @v_product_code = product_code, @v_price = price
    FROM products
    WHERE product_name = 'Dell 123';

    INSERT INTO SALES(product_code, sale_price) VALUES (@v_product_code, @v_price);

    PRINT 'Product Updated';
END;
