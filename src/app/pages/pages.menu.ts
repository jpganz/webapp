export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'admin',
        data: {
          menu: {
            title: 'Admin',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        },
        children: [
          {
            path: 'system',
            data: {
              menu: {
                title: 'Parametros',
                icon: 'ion-gear-b'
              }
            }
          },
          {
            path: 'usersadm',
            data: {
              menu: {
                title: 'Usuarios',
                icon: 'ion-gear-b'
              }
            }
          },
          {
            path: 'role',
            data: {
              menu: {
                title: 'Roles',
                icon: 'ion-gear-b'
              }
            }
          }]
      },
      {
        path: 'providers',
        data: {
          menu: {
            title: 'Proveedores',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 300,
          }
        },
        children: [
          {
            path: 'list',
            data: {
              menu: {
                title: 'Lista de proveedores',
              }
            }
          }]
      }
    ]
  }
];
