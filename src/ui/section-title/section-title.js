import './section.title.css'

export default function SectionTitle(props){
    return(
        <div className='sectionTitle'>
            {props.children}
        </div>
    )
}