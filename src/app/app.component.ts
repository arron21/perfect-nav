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
      label: 'dashboard',
      icon: '',
      iconImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAFiQAABYkBbWid+gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGySURBVEiJpdW7a1RREAbw34lZsusLUigxrYWKIEjsLMTCP8BeQfDZio2IpEpjnVI7bSxFC7URCUtQIliINprWINhpksqx2BO9hLvn7CYDBy7z+L57vzMzN0WEkqWU9uI+zqGHhHW8xUJErBcBImLowTTe4yqmGv4ubmEF00WMCsE8rhTi1zG/G4Jl9ArxHpZLGBNF/ehGxEZB3o0s11CrEaRKvJozlCCl1EFnBIJOzh2PACfQH4Ggn3PHJigPyH8ry1jokAks4VAhZw5fNWZk3Da9jLuF+BJO7WYOJvEae1piF/C4VF8lyEA3cLvFv4KjtfraHDDYRcda/JMR8a1WPArBSfxs8U/lTVu2iv438VGLFLiDVzg99h3gIj5gAQcLL3EGz/EMc1UCg9XwFA8xW7vAbUQvsIiJEsEjXBsVuIXoHhZbCbLm/Z2CN3DeacxNs4uO43O1K+r2SaOtmwTrmE0pHdgpcq6dweaWb3LrISJWU0ov8SWl9MSgi9by+R4Rv7aB7ceRDDhjsPgu4UFErP7Ly7o1C7s4j7O58HA++/Cn8eW/8SOfNYP/wpuI2Gzi/QViu/FfL3976QAAAABJRU5ErkJggg==',
      disabled: false,
      link: 'google.com',
      children: [
        {
          visible: true,

          label: 'emails',
          icon: '',
          iconImg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAFsQAABbEBkt6kwQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFjSURBVEiJ7daxS5VRGMfxz7mECZbWIOgidIcI1MlFp6ZyEFrE1aGlNWhoaooG+wsE/wNBXIXWQAUhkAInEZeGpkqcisfBoxwv1/uevI3+4BnO85zn933POe97eFNEqFVKaQUi4m11Tw0gpdTCKv7k1ABeRcTfxuaI6BnZbB0fitx7bOAuNrFTxOSV/gbzIWzhTZfaa3zCAQZzrGG2CoCH+IyXPeYs4yce5PFqFQDj2MNixRa+wC7GqgBoYx/PmsyLnqf4krfzegCm8a1zUiVkBj+w0BWAuWw+9a/mhceTvPq5KwA8z4fVvql5AXmUvebz2FI+pON+zQvIcfZcamEU8zht/CrrdZo9J0rqwX9cwaXXnaZHSSkl51fDVEfpK97FxUZfo0YAZvHY+dVQ6mOubfcLGMFhRByVyZTSYa71VKsC0JduAbeA/nX5V5Hf619d5tzHPXzvyI/jBL+79AxHRBvOAPYfSPXExpTSAAAAAElFTkSuQmCC',
          disabled: true,
          link: 'amweb.xyz'
        },
        {
          visible: true,

          label: 'childen',
          icon: 'H',
          disabled: true,
          link: 'amweb.xyz',
          children: [
            {
              visible: true,

              label: 'emails',
              icon: 'H',
              disabled: true,
              link: 'amweb.xyz'
            },
            {
              visible: false,

              label: 'childen',
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

      label: 'inbox',
      icon: 'H',
      disabled: true,
      link: 'amweb.xyz',
      children: [
        {
          visible: true,

          label: 'emails',
          icon: 'H',
          disabled: true,
          link: 'amweb.xyz'
        },
        {
          visible: true,

          label: 'childen',
          icon: 'H',
          disabled: true,
          link: 'amweb.xyz'

        }
      ]
    },
    {
      visible: true,

      label: '3rd thing',
      icon: 'H',
      disabled: true,
      link: 'amweb.xyz'
    }
  ]
}
