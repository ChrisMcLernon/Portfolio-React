import { css } from 'styled-components'

const device = {
  wxs: '400px',
  wsm: '600px',
  wmd: '900px',
  wlg: '1280px',
  wxl: '1440px',
  wxxl: '1920px',
  hxs: '400px',
  hsm: '600px',
  hmd: '900px',
  hlg: '1280px',
  hxl: '1440px',
  hxxl: '1920px',
}

export const media = {
  wxs: (...args) => css`
    @media (max-width: ${device.wxs}) {
      ${css(...args)};
    }
  `,
  wsm: (...args) => css`
    @media (max-width: ${device.wsm}) {
      ${css(...args)};
    }
  `,
  wmd: (...args) => css`
    @media (max-width: ${device.wmd}) {
      ${css(...args)};
    }
  `,
  wlg: (...args) => css`
    @media (max-width: ${device.wlg}) {
      ${css(...args)};
    }
  `,
  wxl: (...args) => css`
    @media (max-width: ${device.wxl}) {
      ${css(...args)};
    }
  `,
  wxxl: (...args) => css`
    @media (max-width: ${device.wxxl}) {
      ${css(...args)};
    }
  `,
  hxs: (...args) => css`
    @media (max-height: ${device.hxs}) {
      ${css(...args)};
    }
  `,
  hsm: (...args) => css`
    @media (max-height: ${device.hsm}) {
      ${css(...args)};
    }
  `,
  hmd: (...args) => css`
    @media (max-height: ${device.hmd}) {
      ${css(...args)};
    }
  `,
  hlg: (...args) => css`
    @media (max-height: ${device.hlg}) {
      ${css(...args)};
    }
  `,
  hxl: (...args) => css`
    @media (max-height: ${device.hxl}) {
      ${css(...args)};
    }
  `,
  hxxl: (...args) => css`
    @media (max-height: ${device.hxxl}) {
      ${css(...args)};
    }
  `,

}