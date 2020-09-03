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

  hoverReveal = true;

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
      label: 'Multi Level Dropdown 1',
      icon: 'A',
      faIcon: `fa-chart-line`,
      iconImg: '',
      disabled: false,
      link: 'google.com',
      children: [
        {
          visible: true,

          label: 'Multi Level Dropdown 1.1',
          icon: 'A',
          iconImg: '',
          disabled: true,
          link: 'amweb.xyz'
        },
        {
          visible: true,

          label: 'Multi Level Dropdown 1.2',
          icon: 'A',
          disabled: true,
          link: 'amweb.xyz',
          children: [
            {
              visible: true,

              label: 'Multi Level Dropdown 1.2.1',
              icon: 'A',
              disabled: true,
              link: 'amweb.xyz',
              children: [
                {
                  visible: true,

                  label: 'Multi Level Dropdown 1.2.1.1',
                  icon: 'A',
                  disabled: true,
                  link: 'amweb.xyz'
                },
                {
                  visible: true,
                  label: 'Multi Level Dropdown 1.2.1.2',
                  icon: 'A',
                  disabled: true,
                  link: 'amweb.xyz'

                }
              ]
            },
            {
              visible: false,

              label: 'Multi Level Dropdown 1.2.2',
              icon: 'H',
              disabled: true,
              link: 'amweb.xyz'

            }
          ]
        }
      ]
    },
    {
      visible: true,

      label: 'Single Level Child',
      icon: 'B',
      disabled: true,
      link: 'amweb.xyz',
      children: [
        {
          visible: true,

          label: 'Child',
          icon: 'B',
          disabled: true,
          link: 'amweb.xyz'
        },
        {
          visible: true,

          label: 'Child',
          icon: 'B',
          disabled: true,
          link: 'amweb.xyz'

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

      label: 'Link ',
      icon: 'C',
      disabled: true,
      link: 'amweb.xyz'
    },
    {
      visible: true,
      label: 'Additional Examples',
      disabled: true,
      groupCategory: true,
    },
    {
      visible: true,
      label: 'No Icon',
      icon: '',
      disabled: true,
      link: 'amweb.xyz'
    },
    {
      visible: true,
      label: 'Children without icon',
      icon: 'D',
      disabled: true,
      link: 'amweb.xyz',
      children: [
        {
          visible: true,
          label: 'Child without icon',
          icon: '',
          disabled: true,
          link: 'amweb.xyz',
        },
        {
          visible: true,
          label: 'Child with icon',
          icon: 'D',
          disabled: true,
          link: 'amweb.xyz',
        }
      ]
    }
  ]
}
