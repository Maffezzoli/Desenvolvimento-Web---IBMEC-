from socket import socket, AF_INET, SOCK_STREAM
server_port = 5700
server_socket = socket(AF_INET, SOCK_STREAM)
server_socket.bind(('', server_port))
server_socket.listen(1)
print("Servidor pronto!")
while True:
 connection_socket, addr = server_socket.accept()
 msg = connection_socket.recv(1024).decode()
 print(connection_socket)
 msg_modificada = msg.upper()
 connection_socket.send(msg_modificada.encode())
 connection_socket.close()