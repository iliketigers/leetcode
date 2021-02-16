# https://leetcode.com/problems/combine-two-tables/
# Write a SQL query for a report that provides the following information for each person in the Person table, regardless if there is an address for each of those people:

# FirstName, LastName, City, State

# Write your MySQL query statement below

SELECT FirstName, LastName, City, State
FROM Person left join Address
on Person.PersonId = Address.PersonId