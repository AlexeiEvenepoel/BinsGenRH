#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Código desobfuscado de mundobins.py
#!/usr/bin/env python3
import random
import getopt
import time
import os
import sys
import datetime
from random import randint
import requests as reqs
#COLORES
rojo = '\033[31;1m'
azul = '\033[34;1m'
verde = '\033[32;1m'
amarillo = '\033[33;1m'
morado = '\033[35;1m'
celeste = '\033[36;1m'
plomo = '\033[30;1m'
close = '\033[0m'
##DATOS
rest = "xxxxxxxxxx"
list = [2022,2023,2024,2025,2026,2027]
list2 = ['ESTADOS UNIDOS', 'BRAZIL', 'COLOMBIA', 'ESPAÃA', 'SINGAPUR', 'CANADA', 'ALEMANIA']
nume = random.randrange(510000, 569999)
masterc = str("{0}{1}". format(nume, rest))
nume2 = random.randrange(400000, 469999)
visa = str("{0}{1}". format(nume2, rest))
nume3 = random.randrange(370000, 378899)
amex = str("{0}{1}". format(nume3, rest[:9]))
nume4 = random.randrange(650000, 659999)
disc = str("{0}{1}". format(nume4, rest))
cvv =random.randint(100, 999)
cid = random.randint(1000, 9999)
data3 = random.choice(list2)
cpf = random.randrange(1, 99999999999)
by = 'BY : @âRealHackRHâ_593'
r = "xxxxxx"
x='x'
sp = '|'
space = '\n==================================================================\n@MundoNetRH (Telegram)\n==================================================================\n'
def clear_screen():
    """Función para limpiar pantalla compatible con Windows y Linux"""
    if os.name == 'nt':  # Windows
        os.system('cls')
    else:  # Linux/Mac
        os.system('clear')

def show_title(title):
    """Función para mostrar títulos de forma compatible"""
    print("\n" + "="*60)
    print(f"           {title}")
    print("="*60)

def stop():
	print(verde,'\n\n$ BUSCANDO TARGETAS DE CREDITO CON INJECCION RH' )
	for i in range(20):
		time.sleep(1)
		print('â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢')
#GENERADOR BASADO EN ALGORITMO LUHN
def cardLuhnChecksumIsValid(card_number):
    """ checks to make sure that the card passes a luhn mod-10 checksum """
    sum = 0
    num_digits = len(card_number)
    oddeven = num_digits & 1
    for count in range(0, num_digits):
        digit = int(card_number[count])
        if not (( count & 1 ) ^ oddeven ):
            digit = digit * 2
        if digit > 9:
            digit = digit - 9
        sum = sum + digit
    return ( (sum % 10) == 0 )
###GENERACION DE XXXXXXXXXXXX
def ccgen(bin_format):
    out_cc = ""
    if len(bin_format) == 15:
        print(amarillo,'[â] LO SENTIMOS PERO ESTE GENERADOR NO PUEDE GENERAR LAS TARGETA AMEX :-C\n [â] PARA ESO USA EL',morado,'MULTIGENERADOR DE BINS\\CC',amarillo,'DE LA OPCION [ 5 ]')
        sys.exit()
            #else:
               # print("EL BIN AMEX QUE INTRODUJISTE, ESTA MAL\nVUELVE A INTENTAR DE NUEVO\nASEGURESE DE COLOCAR 'x' o 'X' CORRECTAMENTE")
                #sys.exit()
    elif len(bin_format) == 16:
#PARA TODA TARGETA
#Iteration over the bin
        for i in range(15):
            if bin_format[i] in ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9"):
                out_cc = out_cc + bin_format[i]
                continue
            elif bin_format[i] in ("x and X"):
                out_cc = out_cc + str(randint(0,9))
            else:
                print("EL BIN VISA / MASTERCARD QUE COLOCASTE, ESTA MAL\nVUELVE A INTENTAR DE NUEVO\nASEGURESE DE COLOCAR 'x' o 'X' CORRECTAMENTE")
                sys.exit()
#Generate checksum (last digit) -- IMPLICIT CHECK
        for i in range(10):
            checksum_check = out_cc
            checksum_check = checksum_check + str(i)
            if cardLuhnChecksumIsValid(checksum_check):
                out_cc = checksum_check
                break
            else:
                checksum_check = out_cc
    else:
        print("\033[1;32m")
        clear_screen()
        print("\n" + "="*50)
        print("           ERROR")
        print("="*50)
        print("\n\033[32;1mINSERTASTE UN BIN MAL ESTRUCTURADO\n")
        print("EL BIN :",bin_format,"DEBE TENER 15 DIJITOS SI ES AMEX\n")
        print("PERO SI ES VISA O MASTERCARD, DEBE TENER 16 DIJITOS\n")
        print("ENCASO DE QUE SEA UN ERROR DEL SISTEMA\n HASMELO SABER EN MI GRUPO DE WHATSAP Y TELEGRAM\n\n")
        sys.exit()
    return(out_cc)
def network():
	try:
		requests.get('https://github.com/', timeout = 5)
		print (G + '[+]' + C + ' Comprobando la conexiÃ³n a internet....' + W, end='')
		print (G + ' Cargando' + W + '\n')
	except requests.ConnectionError:
		print (R + '[!]' + C + ' Usted no estÃ¡ conectado a Internet ... Deja de fumar...' + W)
		sys.exit()
def pasedrh():
    # Función de verificación de contraseña deshabilitada
    print(morado,'\n ACCESO CONCEDIDO......\n')
    pass
#RANDOM CCV GEN
def ccvgen():
    if len(bin_format)==16:
        num = randint(10,999)
        if num < 100:
            ccv = "0" + str(num)
        else:
            ccv = str(num)
    else:
        num=randint(100,9999)
        if num < 1000:
            ccv = "0" + str(num)
        else:
            ccv = str(num)
    return(ccv)
#CHECK GEN
def checker():
    chec = ['\033[31;1mDied Card\033[33;1m','\033[35;1mUnknow Card\033[33;1m','\033[31;1mDied Card\033[33;1m','\033[32;1mLive Card\033[33;1m', '\033[31;1mDied Card\033[33;1m','\033[31;1mDied Card\033[33;1m']
    check =random.choice(chec)
    return(check)
#DATA1GEN
def data1gen():
    data1 = random.randrange( 1, 12)
    if data1 < 10:
        date = "0" + str(data1)
    else:
        date = str(data1)
    return(date)
###DATA2GEN
def data2gen():
    data2 = random.choice(list)
    return(data2)
#DETECTOR DE BINS FALSOS
def bindetector():
	clear_screen()
	print("\n" + "="*50)
	print("           BIN_FALSO")
	print("="*50)
	print('\n\n\033[31;1m ERROR DE BIN DETECTADO :\033[30;1m'+bin_format+'\033[34;1m\n\n ESO NO ES UN BIN AMIG@\n\n VUELVA AQUI CUANDO CONOSCA COMO SE CONFORMA UN BIN\n\nMEJOR AVERIGÃE CUANTAS CLASES DE BINS EXISTEN \nY COMO SE ESTRUCTURAN\n\n')
	sys.exit()
######CHEKEADOR DE BINS
from bs4 import BeautifulSoup
import requests
def bincheckrh():
    Bin = FBin[:6]
    url = "https://quickbinlookup.com/?binquery="+Bin
    req = requests.get(url)
    status_code = req.status_code
    if status_code == 200:
        html = BeautifulSoup(req.text, "html.parser")
        entradas = html.find_all('div',{'id':'results'})
        for i, entrada in enumerate(entradas):
            brand = entrada.find('td', {'id': 'typeresult'}).getText()
            typo = entrada.find('td', {'id': 'category'}).getText()
            prepaid = entrada.find('td', {'id': 'website'}).getText()
            country = entrada.find('td', {'id': 'brandresult'}).getText()
            phone = html.find('td', {'id':'bankresult'}).getText()        
            bank = html.find('td', {'id': 'subbrand'}).getText()        
            websites = html.find('td', {'id': 'countryresult'}).getText()
            #phone = html.find('td', {'id' 'bankresult'}).getText()
            com='xxxxxxxxxx'
            print(verde,"[â] NUMERO DE LA TARGETA:",amarillo,Bin+com)
            print(verde,"[â] MARCA :",amarillo,brand)
            print(verde,"[â] TIPO :",amarillo,typo)
            print(verde,"[â] PREPAGO ?? :",amarillo,prepaid)
            print(verde,"[â] PAIS :",amarillo,country)
            print(verde,"[â] BANKO :",amarillo,bank)
            print(verde,"[â] SITIO WEB :",amarillo,websites)
            print(verde,"[â] TELEFONO :",amarillo,phone)
            print(rojo,space,morado)
            print(input("          ********DELE ENTER â PARA CONTINUAR********"))
    else:
        print("ALGO NO ANDA BIEN :-(\nSI VE ESTE MENSAJE ES POR QUE LA PAGINA CADUCO\nPOR FAVOR HAGALO SABER A @REALHACKRH593)")
######EXTRAPOLACION BASICA
def genbasico():
 ba = (bin1[0:10])
 ba2 = (bin2[0:10])
 genba = "{0}{1}". format(ba, r)
 genba2 = "{0}{1}". format(ba2, r)
 print("EXTRAPOLACION EXITOSA : ",genba)
 print("EXTRAPOLACION EXITOSA : ",genba2)
 return(by)
#####EXTRAPOLACION MEDIA
def genmedio():
 ex = (bin1[0:7])
 ex2 = (bin2[0:7])
 tra = (bin1[8:10])
 tra2 = (bin2[8:10])
 po = (bin1[12:14])
 po2 = (bin2[12:14])
 la = (bin1[15:])
 la2 = (bin2[15:])
 gen = "{a}{y}{b}{y}{y}{c}{y}{d}".format(a=(ex), y=x, b=(tra), c=(po), d=(la))
 gen2 = "{a}{y}{b}{y}{y}{c}{y}{d}".format(a=(ex2), y=x, b=(tra2), c=(po2), d=(la2))
 print("EXTRAPOLACION FABULOSA : ",gen)
 print("EXTRAPOLACION FABULOSA : ",gen2)
 return(by)
###EXTRAPOLACION AVANZADA
def genavanzado():
 comp = str("{0}{1}". format(bin1[9], bin1[10]))
 comp2 = str("{0}{1}". format(bin2[9], bin2[10]))
 sum1 = (int(comp[0]) + int(comp2[0]))
 sum2 = (int(comp[1]) + int(comp2[1]))
 result1 = str(int(sum1) / int("2")* 5)
 result2 = str(int(sum2) / int("2")* 5)
 add = (str("{0}{1}". format(result1[0], result1[1])))
 add2 = (str("{0}{1}". format(result2[0], result2[1])))
 extrapolado = (int(add) + int(add2))
 fingen = "{0}{1}{2}".format(bin1[0:8], extrapolado, r)
 print("EXTRAPOLACION SUPER VIP : ",fingen)
 return(by)
import requests
import subprocess as subp
def actualizar():
    msa = ("\nBUSCANDO ACTUALIZACIONESâ¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢\n")
    def cargat():
        for i in msa:
            sys.stdout.write(i)
            sys.stdout.flush()
            time.sleep(0.1)
    cargat()
def actualizacion():
    time.sleep(2)
    msa = ("\n ACTUALIZANDO A LA NUEVA VERSIONâ¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢\n")
    def cargat():
        for i in msa:
            sys.stdout.write(i)
            sys.stdout.flush()
            time.sleep(0.1)
    cargat()
import requests
import sys
import os
import time
import sys
import subprocess as subp
verde=('\033[32;1m')
amarillo=('\033[33;1m')
rojo=('\033[31;1m')
celeste=('\033[30;1m')
def actualizar():
    msa = (morado+"\nBUSCANDO ACTUALIZACIONESâ¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢\n")
    def cargat():
        for i in msa:
            sys.stdout.write(i)
            sys.stdout.flush()
            time.sleep(0.1)
    cargat()
def actualizacion():
    time.sleep(2)
    msa = (rojo+"\n ACTUALIZANDO A LA NUEVA VERSIONâ¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â¢\n")
    def cargat():
        for i in msa:
            sys.stdout.write(i)
            sys.stdout.flush()
            time.sleep(0.1)
    cargat()
def checkversion():
    if __name__ == '__main__':
        url = "https://pastebin.com/raw/RKnrunYb"
        response =requests.get(url)
        if response.status_code == 200:
            content = response.content
            actualizar()
            time.sleep(2)
            if content == b'3.0':
                clear_screen()
                print(verde+"\n\n$ NO HAY ACTUALIZACIONES DISPONIBLES")
                print("$ SIGUE CON ESTA VERSION POR EL MOMENTO\n$ ESPERE A QUE @REALHACKRH593 ACTUALIZE LA VERSION (^_^)\n$ RECUERDA AGRADECER Y COLABORAR CON UNA DONACION PAYPAL\n O MEDIANTE DEPOSITO")
                time.sleep(4)
            else:
                clear_screen()
                print(amarillo+"\n\n[â] SE ENCONTRO UNA NUEVA VERSION (^_^)")
                print("[â] VERSION NUEVA = ",content)
                actualizacion()
                subp.check_output(['git', 'reset', '--hard'])
                subp.check_output(['git', 'pull'])
                print (rojo+'\n[+]'+celeste+' Script actualizado con exito... \nPor favor, vuelva a ejecutar la script...')
                sys.exit()
        else:
            print(rojo," SE PRODUJO UN ERROR (X_X)")
    else:
        print(plomo,"ALGO NO ANDA BIEN (Â¢_Â¢)")
def manual():
    manual = str(input("DESEA COLOCAR LA FECHA [Yes/No] :"))
    if manual in ('y','Y','yes','YES','Yes'):
        print(azul)
        dates1= str(input("  > COLOQUE EL MES : "))
        dates2= str(input("  > COLOQUE EL AÃO : "))
        print(verde)
        cvvmanual = str(input("DESEA COLOCAR LA CVV [Yes/No] : "))
        if cvvmanual in ('y','Y','yes','YES','Yes'):
            print(azul)
            cvvman = str(input("  > COLOQUE LA CCV : "))
            print(rojo,"\n\n|| CREDIT CARD  || CVV ||MES|| AÃO ||| CHECKER |||")
            print(amarillo)
            for i in range(can):
                time.sleep(0.5)
                a = bin_format[:6]
                b = print(ccgen(bin_format),sp,cvvman,sp,dates1,sp,dates2,sp,">",checker()) if a >= '369999' and a <='660000' else (bindetector())
            print(b)
        else:
            print(rojo,"\n\n|| CREDIT CARD  || CVV ||MES|| AÃO ||| CHECKER |||")
            print(amarillo)
            for i in range(can):
                time.sleep(0.5)
                a = bin_format[:6]
                b = print(ccgen(bin_format),sp,ccvgen(),sp,dates1,sp,dates2,sp,">",checker()) if a >= '369999' and a <='660000' else (bindetector())
            print(b)
    else:
        print(rojo,"\n\n|| CREDIT CARD  || CVV ||MES|| AÃO ||| CHECKER |||")
        print(amarillo)
        for i in range(can):
            time.sleep(0.5)
            a = bin_format[:6]
            b = print(ccgen(bin_format),sp,ccvgen(),sp,data1gen(),sp,data2gen(),sp,">",checker()) if a >= '369999' and a <='660000' else (bindetector())
        print(b)
am ='\033[33;1m'
ro = '\033[31;1m'
### ACCES
try:
 import requests
except:
  print(morado," REVISANDO MODULOS")
  time.sleep(2)
  if os.name=='nt':
    try:
      os.system('C:\\\\Python27\\\\Scripts\\\\pip2.exe install requests')
    except:
      print(celeste,"REVISION COMPLETADA (^_^)")
      input('')
  else:
    os.system('pip2 install requests')
clear_screen()
print(verde + "\n" + "="*60)
print("           â¢MUNDO RealHackRH_593â¢")
print("="*60)
print("\n" + "="*60)
print("              RealHackRH")
print("="*60)
print(amarillo)
# Usuario por defecto - sin solicitar entrada
nic = "BinHacker"
print(f' TU NICK BINERO PARA EL MUNDOCARDING âRHâ: {nic}')
pasedrh()
time.sleep(2)
clear_screen()
######By: Boss
while True:
    show_title("BINS_GEN")
    print("\n\n\033[33;1m HOLA \033[31;1mâ â",nic,"ââ \033[33;1m BIENVENIDO AL MUNDO âREALKING RHâ\n  âSOMOS CALIDAD Y NO CANTIDADâ RECUERDANOS")
    time.sleep(0.5)
    print('	      +ââââââââââââââââââââââââââââââ+')
    print('                  | MUNDO BINS âRHâ PRO  | ')
    print('	      +ââââââââââââââââââââââââââââââ+')
    print(azul+'  [ 1 ] BUSCADOR DE BINS MASTERCARD')
    print('  [ 2 ] BUSCADOR DE BINS VISA')
    print('  [ 3 ] BUSCADOR DE BINS AMEX')
    print('  [ 4 ] BUSCADOR DE BINS DISCOVER')
    print('  [ 5 ] MULTIGENERADOR DE BINS\\CC')
    print('  [ 6 ] CHEKEADOR DE BINS')
    print('  [ 7 ] GENERADOR LIVE DE BINS')
    print('  [ 8 ] MULTI EXTRAPOLADOR DE CC')
    print('  [ 9 ] ACTUALIZAR LA SCRIPT RH')
    print('  [ 0 ] SALIR DEL SCRIPT                  \033[36;1m[ \033[31;1mVersion: 3.0 \033[36;1m]\n')
    bi = str(input(' \033[01;33m%%%%%%\033[01;34m%%%%\033[01;31m%%%%\033[01;32m MUNDO BINS âRHâ \033[01;33m%%%%%%\033[01;34m%%%%\033[01;31m%%%%\033[01;32m  # \033[01;37m'))
    if bi == '1':
        clear_screen()
        time.sleep(1)
        stop()
        time.sleep(10)
        clear_screen()
        print(rojo,space)
        print(amarillo+'NUMERO DE LA TARGETA :',verde,masterc)
        print(amarillo+'CVV :',verde,cvv)
        print(amarillo+'FECHA :',verde,data1gen(),sp,data2gen())
        print(amarillo+'CPF DE LA TARGETA :',verde,cpf)
        FBin = masterc
        print(azul,"\n        âââââINFORMACION ADICIONALâââââ")
        bincheckrh()
        print(by)
        print(morado+'AHORA DEBES PROBAR EN DIRERENTES PAGINAS TU CC' ,masterc,'Y SIQUIERES QUE TE FUNCIONE DEBES EXTRAPOLAR, ALGUNAS SON \nMULTIFUNCIONALES Y PUES ALGUNAS PUEDEN JALAR EN COMPRAS, ALGUNAS \nPUEDEN ESTAR QUEMADAS O MUERTAS, SOLO DEBES PROBAR UNA POR UNA Y \nTENER PACIENCIA \nSI NO TE FUNCIONA CON ESE PAIS PUEDES PROBAR CON ESTADOS UNIDOS\n')
        time.sleep(2)
    elif bi == '2':
        clear_screen()
        time.sleep(1)
        stop()
        time.sleep(10)
        clear_screen()
        print(rojo,space)
        print(amarillo+'NUMERO DE LA TARGETA :',verde,visa)
        print(amarillo+'CVV :',verde,cvv)
        print(amarillo+'FECHA :',verde,data1gen(),sp,data2gen())
        print(amarillo+'CPF DE LA TARGETA :',verde,cpf)
        print(azul,"\n        âââââINFORMACION ADICIONALâââââ")
        FBin = visa
        bincheckrh()
        print(by)
        print(morado+'AHORA DEBES PROBAR EN DIRERENTES PAGINAS TU CC' ,visa,'Y SIQUIERES QUE TE FUNCIONE DEBES EXTRAPOLAR, ALGUNAS SON \nMULTIFUNCIONALES Y PUES ALGUNAS PUEDEN JALAR EN COMPRAS, ALGUNAS \nPUEDEN ESTAR QUEMADAS O MUERTAS, SOLO DEBES PROBAR UNA POR UNA Y \nTENER PACIENCIA \nSI NO TE FUNCIONA CON ESE PAIS PUEDES PROBAR CON ESTADOS UNIDOS\n')
        time.sleep(2)
    elif bi == '3':
        clear_screen()
        time.sleep(1)
        stop()
        time.sleep(10)
        clear_screen()
        print(rojo,space)
        print(amarillo+'NUMERO DE LA TARGETA :',verde,amex)
        print(amarillo+'CVV :',verde,cid)
        print(amarillo+'FECHA :',verde,data1gen(),sp,data2gen())
        print(amarillo+'CPF DE LA TARGETA :',verde,cpf)
        FBin = amex
        print(azul,"\n        âââââINFORMACION ADICIONALâââââ")
        bincheckrh()
        print(by)
        print(morado+'AHORA DEBES PROBAR EN DIRERENTES PAGINAS TU CC' ,amex,'Y /nSIQUIERES QUE TE FUNCIONE DEBES EXTRAPOLAR, ALGUNAS SON \nMULTIFUNCIONALES Y PUES ALGUNAS PUEDEN JALAR EN COMPRAS, ALGUNAS \nPUEDEN ESTAR QUEMADAS O MUERTAS, SOLO DEBES PROBAR UNA POR UNA Y \nTENER PACIENCIA \nSI NO TE FUNCIONA CON ESE PAIS PUEDES PROBAR CON ESTADOS UNIDOS\n')
        time.sleep(2)
    elif bi == '4':
        clear_screen()
        time.sleep(1)
        stop()
        time.sleep(10)
        clear_screen()
        print(rojo,space)
        print(amarillo+'NUMERO DE LA TARGETA :',verde,disc)
        print(amarillo+'CVV :',verde,cvv)
        print(amarillo+'FECHA :',verde,data1gen(),sp,data2gen())
        print(amarillo+'CPF DE LA TARGETA :',verde,cpf)
        FBin = disc
        print(azul,"\n        âââââINFORMACION ADICIONALâââââ")
        bincheckrh()
        print(by)
        print(morado+'AHORA DEBES PROBAR EN DIRERENTES PAGINAS TU CC' ,disc,'Y \nSIQUIERES QUE TE FUNCIONE DEBES EXTRAPOLAR, ALGUNAS SON \nMULTIFUNCIONALES Y PUES ALGUNAS PUEDEN JALAR EN COMPRAS, ALGUNAS \nPUEDEN ESTAR QUEMADAS O MUERTAS, SOLO DEBES PROBAR UNA POR UNA Y \nTENER PACIENCIA \nSI NO TE FUNCIONA CON ESE PAIS PUEDES PROBAR CON ESTADOS UNIDOS\n')
        time.sleep(2)
    elif bi == '5':
        clear_screen()
        print(amarillo)
        msas = ("\nACCEDIENDO AL MULTIGENERADOR DE BINS EN SU VERSION PREMIUM>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        def cargats():
            for i in msas:
                sys.stdout.write(i)
                sys.stdout.flush()
                time.sleep(0.02)
            time.sleep(0.4)
        cargats()
        os.system('cd multigen;python genbin.py')
        print(celeste)
        print('AYUDAME CON UNA DONACION A PAYPAL O DEPOSITO')
        rv = input('PRESIONE ENTER â PARA CONTINUAR')
    elif bi == '6':
        clear_screen()
        time.sleep(2)
        print(morado)
        show_title("LOOK_BIN")
        print(rojo,"ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ")
        FBin = str(input("\n\033[1;33mâ INGRESE EL BIN A CHEKEAR : \033[1;35m"))
        bincheckrh()
        time.sleep(2)
    elif bi == '7':
        clear_screen()
        time.sleep(1)
        print(rojo)
        show_title("BINS_GEN")
        print(verde,space)
        bin_format = str(input('DIGITE BIN DE 16 DIGITOS  #: '))
        can = int(input("CANTIDAD A GENERAR  #: "))
        manual()
        print(verde, by)
        print(celeste, "\n >USA LAS QUE ESTAN 'LIVE'  PARA MAS PROBABILIDAD")
        ch = input(" >PRESIONE ENTER PARA CONTINUAR â")
        print(verde, space)
        time.sleep(0.5)
    elif bi == '8':
        clear_screen()
        time.sleep(2)
        print(amarillo)
        show_title("CC_LIVE")
        print(rojo,"ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ")
        print(celeste)
        bin1 = str(input("PONGA SU PRIMERA CC : "))
        bin2 = str(input("PONGA SU SEGUNDA CC : "))
        print(azul,space)
        time.sleep(2)
        print(rojo, "                   â EXTRAPOLACION BASICA â",amarillo)
        print(genbasico())
        time.sleep(2)
        print(rojo,"\n                   â EXTRAPOLACION MEDIA â",amarillo)
        print(genmedio())
        time.sleep(2)
        print(rojo,"\n                   â EXTRAPOLACION AVANZADA â",amarillo)
        print(genavanzado())
        print(morado,"\nESTA EXTRAPOLACION AVANZADA SE SACO DE LA BASE DE DATOS DEL BANCO")
        print(azul, space)
        print(verde,"      > EXTRAPOLACION COMPLETADA.....\n\n")
        time.sleep(2)
    elif bi=='9':
        checkversion()
    elif bi == '0':
        clear_screen()
        print(amarillo)
        show_title("RHSociety")
        print(plomo)
        print("[â¢]DESARROLLADO POR \033[32;1m@REALHACKRH593 (Telegram)\033[30;1m \n[â¢]PROHIBIDO LA VENTA DE LA HERRAMIENTA\n[â¢]UNETE A: \033[32;1m@MundoNetRH (Telegram)\033[30;1m PARA MAS!.\n[â¢]SIEMPRE AGRADECE POR LO QUE HACEMOS.\n[â¢]EL CONOCIMIENTO NO TIENE FIN\n[â¢]ESTA HERRAMIENTA TE AYUDA A CONSEGUIR TARGETAS DE CREDITOS Y GENERACION DE BINS\n[â¢]AYUDAME CON UNA DONACION A MI CUENTA PAYPAL : \033[1;32mpaypal.me/edwinyd\n\033[1;30m[â¢]SIEMPRE AGRADECE POR LO QUE HACEMOS.\n[â¢]EL CONOCIMIENTO ES GRATIS Y HACI QUE COMPARTELO\n[â¢]LA MEJOR APK DE CARDING \n",verde,"[â¢]https://apkpure.com/u/2822488/post/4729661 \n  [â¢]http://www.appcreator24.com/app729139 \n\n",rojo,"[â¢]MI CANAL DE YOUTUBE\n",morado,"https://m.youtube.com/channel/UCgQQLnIEodkiZIXb8hNcjqg \033[30;01m\n[â¢]NOS VEMOS",nic,"AGRADECE A REALHACKRH POR LA SCRIPT GRATIS\n")
        sys.exit()
        break
    else:
        clear_screen()
        print(rojo)
        print("OPCION INCORRECTA \nPOR FAVOR DIJITA DE NUEVO AMIG@\nY DEJA DE FUMAR")
        time.sleep(2)
        clear_screen()