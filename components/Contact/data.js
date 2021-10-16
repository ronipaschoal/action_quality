export const data = {
  id: 'contact',
  title: ['Fale Conosco', 'Contact Us'],
  fields: [
    {
      name: 'name',
      label: ['Nome', 'Name'],
      placeholder: ['Digite seu nome', 'Type your name'],
      type: 'input'
    },
    { 
      name: 'email',
      label: ['E-mail', 'E-mail'],
      placeholder: ['Digite seu e-mail', 'Type your e-mail'],
      type: 'input'
    },
    {
      name: 'phone',
      label: ['Telefone', 'Phone'],
      placeholder: ['Digite seu telefone', 'Type your phone'],
      type: 'input'
    },
    {
      name: 'message',
      label: ['Mensagem', 'Message'],
      placeholder: ['Digite a mensagem', 'Type the message'],
      type: 'textarea'
    }
  ],
  status: {
    success: [
      'Email enviado com sucesso!',
      'Email successfully sent!'
    ],
    required: [
      'Favor preencher todos os campos.',
      'Please fill in all fields.'
    ],
    error: [
      'Houve um erro ao enviar o email, por gentileza entre em contato atráves do número 19 99730.6871',
      'There was an error sending the email, please contact us at +55 19 99730.6871'
    ],
    progress: [
      'Enviando o email...',
      'Sending the email...'
    ]
  },
  submit: ['Enviar', 'Subimit'],
  serviceUrl: 'https://fiversystem.com/action-quality/mail.php?'
}