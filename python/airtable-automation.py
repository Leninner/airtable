from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from openpyxl import load_workbook, workbook
from datetime import datetime

driver = webdriver.Chrome("C:/Users/USUARIO/Desktop/chromedriver.exe")

# Form para llenar automatización => https://airtable.com/shr7TnsNHBrh1gdSo

driver.get("https://airtable.com/shr7TnsNHBrh1gdSo")

sleep(2)

file = "./airtable-automation.xlsx"
wb = load_workbook(file)
hojas = wb.get_sheet_names()
nombreHoja = wb.get_sheet_by_name("Jobs")
wb.close()

for i in range(2, 23):
    vacante, empresa, ciudad, link = nombreHoja[f'A{i}:D{i}'][0]
    driver.find_element_by_xpath("/html/body/div[1]/div[6]/div/main/div/div/div[1]/div[1]/div/div/div/div/div/div/input").send_keys(datetime.today().strftime("%B-%d-%y"))
    sleep(1)
    driver.find_element_by_xpath("/html/body/div[1]/div[6]/div/main/div/div/div[1]/div[2]/div[2]/div/div/div/div/div[1]").send_keys(vacante.value)
    sleep(1)
    driver.find_element_by_xpath("/html/body/div[1]/div[6]/div/main/div/div/div[1]/div[3]/div[2]/div/div/div/div/div[1]").send_keys(empresa.value)    
    sleep(1)
    driver.find_element_by_xpath("/html/body/div[1]/div[6]/div/main/div/div/div[1]/div[5]/div[2]/div/div/div/div/div").send_keys(ciudad.value + Keys.ENTER)
    sleep(1)
    driver.find_element_by_xpath("/html/body/div[1]/div[6]/div/main/div/div/div[1]/div[8]/div/div/div/input").send_keys(link.value)
    sleep(1)
    driver.find_element_by_xpath("/html/body/div[1]/div[6]/div/main/div/div/div[2]/input").click()
    print("-----------Datos enviados-----------")
    sleep(7)

driver.close()
