import fastify from 'fastify'
import { createEvent } from './routes/create-event'
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';
import { registerForEvent } from './routes/register-for-event';

const app = fastify()

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createEvent)
app.register(registerForEvent)

app.listen({ port: 3333}).then(() => {
  console.log("server running!")
})