import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  iconPosition = 'icon-left'
  iconMode = false;
  hideIcons = false;
  showCategories = true;
  hoverReveal = true;

  darkMode = false;

  border: string = '';

  links = [
    {
      visible: true,
      label: 'First Group',
      disabled: true,
      groupCategory: true,
    },
    {
      visible: true,
      label: 'google.com',
      icon: 'A',
      iconImg: '',
      disabled: false,
      link: 'google.com',
      children: [
        {
          visible: true,
          label: 'amweb.xyz',
          icon: 'A',
          iconImg: '',
          disabled: true,
          link: 'amweb.xyz'
        },
        {
          visible: true,

          label: 'arronmccrory.com',
          icon: 'A',
          disabled: true,
          link: 'arronmccrory.com',
          children: [
            {
              visible: true,

              label: 'arronmccrory.com',
              icon: 'A',
              disabled: true,
              link: 'arronmccrory.com',
              children: [
                {
                  visible: true,

                  label: 'arronmccrory.com',
                  icon: 'A',
                  disabled: true,
                  link: 'arronmccrory.com'
                },
                {
                  visible: true,
                  label: 'arronmccrory.com',
                  icon: 'A',
                  disabled: true,
                  link: 'arronmccrory.com'

                }
              ]
            },
            {
              visible: false,

              label: 'arronmccrory.com',
              icon: 'H',
              disabled: true,
              link: 'arronmccrory.com'

            }
          ]
        }
      ]
    },
    {
      visible: true,

      label: 'arronmccrory.com',
      icon: 'B',
      disabled: true,
      link: 'arronmccrory.com',
      children: [
        {
          visible: true,

          label: 'arronmccrory.com',
          icon: 'B',
          disabled: true,
          link: 'arronmccrory.com'
        },
        {
          visible: true,

          label: 'arronmccrory.com',
          icon: 'B',
          disabled: true,
          link: 'arronmccrory.com'

        }
      ]
    },
    {
      visible: true,
      label: 'Another Group Category',
      disabled: true,
      groupCategory: true,
    },
    {
      visible: true,

      label: 'arronmccrory.com',
      icon: 'C',
      disabled: true,
      link: 'arronmccrory.com'
    },
    {
      visible: true,
      label: 'Additional Examples',
      disabled: true,
      groupCategory: true,
    },
    {
      visible: true,
      label: 'arronmccrory.com',
      icon: '',
      disabled: true,
      link: 'arronmccrory.com'
    },
    {
      visible: true,
      label: 'arronmccrory.com',
      icon: 'D',
      disabled: true,
      link: 'arronmccrory.com',
      children: [
        {
          visible: true,
          label: 'arronmccrory.com',
          icon: '',
          disabled: true,
          link: 'arronmccrory.com',
        },
        {
          visible: true,
          label: 'arronmccrory.com',
          icon: 'D',
          disabled: true,
          link: 'arronmccrory.com',
        }
      ]
    }
  ]
}
