const profiles = [
  {
    name: 'Jhon Doe',
    age: '27',
    picture: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b42d9579-8d42-499b-bcd8-cd03967a9cb6/d55fyp5-73aa39f5-76ad-4f88-9ccd-1fd8e7de36ae.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I0MmQ5NTc5LThkNDItNDk5Yi1iY2Q4LWNkMDM5NjdhOWNiNlwvZDU1ZnlwNS03M2FhMzlmNS03NmFkLTRmODgtOWNjZC0xZmQ4ZTdkZTM2YWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.oS25YJueKgDX7w3xFUS4KiDza80ubYJLdteOP38YozY',
    createAt: '2021-10-02 10:11:12',
    address: 'calle 123',
    phone: '315 2454515'
  },
  {
    name: 'Juan Perez',
    age: '21',
    picture: 'https://avatarfiles.alphacoders.com/470/thumb-47010.jpg',
    createAt: '2018-10-02 10:51:12',
    address: 'calle 123 Falsa',
    phone: '315 18425025'
  },
  {
    name: 'Flor Flores',
    age: '27',
    picture: 'https://i.pinimg.com/736x/3e/3c/7a/3e3c7a05c0a94ade9e7d55c7cca4662e.jpg',
    createAt: '1990-09-01 01:01:02',
    address: 'Mi dirección',
    phone: '314 85696354'
  },
  {
    name: 'Ramiro Ramirez',
    age: '45',
    picture: 'https://cdn.dribbble.com/users/1637610/screenshots/6133131/vlcsnap-error403.png',
    createAt: '2011-04-08 08:41:12',
    address: 'sin dirección',
    phone: '321 8569645'
  },
  {
    name: 'Martin Martinez',
    age: '15',
    picture: 'https://i.pinimg.com/736x/f5/4e/4d/f54e4dc83c85fc0c659ea0f6e247bfbe.jpg',
    createAt: '2014-06-07 07:11:50',
    address: 'Carrera 89 # 3 - 4',
    phone: '311 4568596'
  }
]

export default async function getProfile (context, id) {
  // const result = await context.$axios.$get()
  // mock service whit 0 register
  const result = await profiles[Math.floor(Math.random() * profiles.length)]
  return result
}
