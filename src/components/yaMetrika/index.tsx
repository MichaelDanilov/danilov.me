import * as React from 'react';

// tslint:disable-next-line max-line-length
const counter =
  '<!-- Yandex.Metrika counter --> <script type="text/javascript" > (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(990590, "init", { id:990590, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); </script> <noscript><div><img src="https://mc.yandex.ru/watch/990590" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->';

class YaMetrika extends React.Component<{}> {
  public shouldComponentUpdate() {
    return false;
  }

  public render() {
    // eslint-disable-next-line react/no-danger
    return <div dangerouslySetInnerHTML={{ __html: counter }} />;
  }
}

export default YaMetrika;
