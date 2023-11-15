export default function BitrixForm() {

   function startBitrixFunction(w,d,u) {
        var s=d.createElement('script');
        s.async=true;
        s.src=u+'?'+(Date.now()/180000|0);
        var h=d.getElementsByTagName('script')[0];
        h.parentNode.insertBefore(s,h);
    }

    startBitrixFunction(window, document, 'https://cdn-ru.bitrix24.ru/b27375882/crm/form/loader_18.js')
    
    return (
        <script data-b24-form="inline/18/sr1xz8" data-skip-moving-"true"/>
    )
}
