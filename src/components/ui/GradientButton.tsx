type Props = {
    text : string;
    onClick : () => void;
    size : 'sm' | 'lg';
}

export default function GradientButton({text, onClick, size = 'sm'}:Props) {
 
return     <div className={`rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300
${size === 'lg'? 'p-[0.3rem]':'p-[0.15rem]'}`}>
<button
  className={`bg-white rounded-sm hover:opacity-90 transition-opacity
  ${size === 'lg'? 'text-2xl p-4':'text-base p-[0.3rem]'}`}
  onClick={onClick}
>
  {text}
</button>
</div>
}