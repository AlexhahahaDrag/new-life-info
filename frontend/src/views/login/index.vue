<template>
  <div class="login-container">
    <a-card class="login-card" title="Login">
      <a-form :model="formState" @finish="onFinish">
        <a-form-item name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
          <a-input v-model:value="formState.username" placeholder="Username">
            <template #prefix>
              <UserOutlined />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
          <a-input-password v-model:value="formState.password" placeholder="Password">
            <template #prefix>
              <LockOutlined />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit" class="login-button" block> Log in </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';

interface FormState {
  username: string;
  password: string;
}

const formState = reactive<FormState>({
  username: '',
  password: '',
});

const router = useRouter();

const onFinish = async (values: FormState) => {
  try {
    // TODO: Implement actual login logic here
    console.log('Login form submitted:', values);
    message.success('Login successful');
    router.push('/');
  } catch (error) {
    message.error('Login failed');
    console.error('Login error:', error);
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
}

.login-card {
  width: 100%;
  max-width: 400px;
}

.login-button {
  height: 40px;
  font-size: 16px;
}
</style>
