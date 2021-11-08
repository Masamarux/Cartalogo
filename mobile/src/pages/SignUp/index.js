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
import api from '../../services/api';

import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, Form } from './styles';

const SignUp = () => {
  const formRef = useRef(null);
  // const {} = useAuth();
  const navigator = useNavigation();

  const handleSignUp = useCallback(
    async (data) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        Alert.alert('Usuário cadastrado', 'Realize o login para continuar');

        navigator.navigate('SignIn');
      } catch (error) {
        Alert.alert('Erro no cadastro', 'Cheque as informações passadas');
      }
    },
    [navigator],
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
              <Title>Faça seu cadastro</Title>
            </View>

            <Form ref={formRef} onSubmit={handleSignUp}>
              <Input
                autoCorrect={false}
                autoCapitalize="words"
                keyboardType="name-phone-pad"
                name="name"
                placeholder="Nome"
                icon="user"
              />
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                placeholder="E-mail"
                icon="mail"
              />
              <Input
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
                name="password"
                placeholder="Senha"
                icon="lock"
              />
              <Button onPress={() => formRef.current.submitForm()}>
                Cadastrar
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;
