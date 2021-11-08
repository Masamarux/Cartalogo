import React, { useRef, useCallback } from 'react';
import {
  KeyboardAvoidingView,
  View,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';
import GoBackButton from '../../components/GoBackButton';

import { Container, Title, Form } from './styles';

const CreateCar = () => {
  const formRef = useRef(null);
  const { token } = useAuth();
  const navigator = useNavigation();

  const handleCreate = useCallback(
    async (data) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          nome: Yup.string().required('Nome é obrigatório'),
          marca: Yup.string().required('Marca é obrigatória'),
          modelo: Yup.string().required('Modelo é obrigatório'),
          preco: Yup.number().required('Preço é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        data.preco = Number(data.preco);

        const res = await api.post('/cars', data, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        });

        Alert.alert('Cadastro de veículo realizado com sucesso!');

        navigator.navigate('Home');
      } catch (error) {
        Alert.alert('Erro no login', 'Cheque as credenciais');
      }
    },
    [navigator, token],
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <View>
              <Title>Adicione um novo veículo</Title>
            </View>

            <Form ref={formRef} onSubmit={handleCreate}>
              <Input name="nome" placeholder="Nome do veículo" icon="disc" />
              <Input name="marca" placeholder="Marca do veículo" icon="box" />
              <Input
                name="modelo"
                placeholder="Modelo do veículo"
                icon="award"
              />
              <Input
                keyboardType="decimal-pad"
                name="preco"
                placeholder="Valor do veículo"
                icon="dollar-sign"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />
              <Button onPress={() => formRef.current.submitForm()}>
                Adicionar veículo
              </Button>
            </Form>
          </Container>
        </ScrollView>
        <GoBackButton onPress={() => navigator.goBack()}>Voltar</GoBackButton>
      </KeyboardAvoidingView>
    </>
  );
};

export default CreateCar;
