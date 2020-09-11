import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [nome, setNome] = useState (''); /*usuario vai digitando e vai guardando*/
  const [telefone, setTelefone] = useState ('');
  const[contatos, setContatos] = useState ([]); 
  const [telefones, setTelefones] = useState ([]);
  const [contadorContatos, setContadorContatos] = useState(0); 

  const capturarNome = (nome) => {
    setNome(nome);     /*atualiza o estado chamando a função de cima e depois isso vai ser alimentado numa lista*/
  } 
  const capturarTelefone = (telefone) => {
    setTelefone(telefone);     /*atualiza o estado chamando a função de cima e depois isso vai ser alimentado numa lista*/
  } 

  const adicionarContato = () => {
    setContatos(contatos => { 
      let indentificador = 10 + (contatos.length + 1) *2;

      return [...contatos, {nome: nome, telefone: telefone, indentificador: indentificador}]}
    );  
  }
  return (
    <View style = {estilos.telaPrincipalView}>

      <View>
        {/*usuario ira inserir os lembretes aqui*/ }
        <TextInput
          placeholder = 'Nome'
          style = {estilos.contatoTextInput}
          onChangeText = {capturarNome}
          value = {nome}
        />
        <TextInput
          placeholder = 'Telefone'
          style = {estilos.contatoTextInput}
          onChangeText = {capturarTelefone}
          value = {telefone}
        />        
        
        <Button
          title = 'Adicionar'
          onPress = {adicionarContato}
        />  
      </View>

      <View>
       {contatos.map((contato, index) => (
       <View style = {estilos.itemNaListaView} key = {index}>
           <Text>{contato.indentificador}</Text>
          <Text>{contato.nome}</Text>
          <Text>{contato.telefone}</Text>
      </View> 
        ))}
       </View> 
    </View>
);}

const estilos = StyleSheet.create({
telaPrincipalView: {
  padding: 50 
}, 
contatoTextInput: {
  borderBottomColor: 'black', 
  borderBottomWidth: 1, 
  marginBottom: 4, 
  padding: 12, 
  textAlign: "center"
},
itemNaListaView: { 
  padding: 12, 
  backgroundColor: '#d1e9ff', 
  borderColor: 'white',
  borderEndWidth: 1,
  marginBottom: 8,
  borderRadius: 8
}})
