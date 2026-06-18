# print("hello world")
# print("welcome to python programming")
# name = input("enter your name: ")
# print("hello " + name + ", welcome to python programming!")
# def greet(name:str):
#     print("good morning " + name + ", have a great day!")
# shafin = "Shafin"
# greet(shafin)


# a = 10
# b = 20
# if a > b:
#     print("a is greater than b")
# elif a < b:
#     print("a is less than b")



# row = 15
# for i in range(row):
#     for j in range(i + 1):
#         print("*", end=" ")
#     print()

# # for i in range(1, 11):
# #     print(i)

rows = 5

# for i in range(1, rows + 1):
#     print(" " * (rows - i), end="")

#     for j in range(1, i + 1):
#         print(j, end=" ")

#     print()


# for i in range(1,101):
#     print(i*5)

# students = ["Shafin", "Rafi", "Sakib", "Rasel", "Nashit"]
# for student in students:
#     print(student)


# i=1
# while i<=10:
#     if i == 5:
#         break
#     print(i)
#     i += 1

# for i in range (1,10):
#  if i ==3:
#   continue
#  print(i)

# for i in range(1,3):
#     for j in range(1,7):
#         print(i,j)

# students = ["alice","bob","prince"]
# print(students[0])
# print(students[1])
# print(students[2])
# print(students[-1])

# students = ["raj","rohit","aman"]
# students.append("riya")
# print(students)
# students.pop()
# print(students)
# students.insert(1,"mansi")
# print(students)
# students.remove("rohit")
# print(students)

# tuple=(1,2,3,4,5,1,2,3,4,5)
# print(tuple[6])
# print(tuple.index(3))


# set ={1,2,3,4,5,6}
# set.add(7)
# print(set)


# try:
#     num = int(input("Enter a number:" ))
#     result = 100/num
# except ZeroDivisionError:
#         print("cannot divide by zero!") 
# except ValueError:
#           print("Invalid input!")
# else:
#      print("success! result is:", result)
# finally:
#         print("Program finished.")


# # file = open('student.txt', 'w')

# file.write("name : Riya     age : 17   phno : 9966778831   class : FYIT \n")
# file.write("name : Raj      age : 17   phno : 9967594431   class : FYIT \n")
# file.write("name : Shivani  age : 17   phno : 9958494102   class : FYIT \n")
# file.write("name : Shiv     age : 17   phno : 6874980213   class : FYIT \n")
# file.write("name : Amruta   age : 17   phno : 8966898839   class : FYIT \n")
# file.write("name : Aman     age : 17   phno : 9966776598   class : FYIT \n")
# # print("Successfully write!")


# file = open('student.txt','r')

# data = file.read()

# print(data)

# file.close()

with open('student.txt','w') as file:
   file.write("name : Ram     age : 17   phno : 9639940898   class : FYIT \n")


 
with open('student.txt','r') as file:
    data = file.read()
    print(data)    
    