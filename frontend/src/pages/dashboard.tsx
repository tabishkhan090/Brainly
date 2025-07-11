import { useState } from 'react'
import { Buttons } from '../components/Button'
import { Cards } from '../components/Card'
import { Createcontentmodal } from '../components/Createcontentmodal'
import { Documenticon } from '../icons/documenticon'
import { Plusicon } from '../icons/plusicon'
import { Shareicon } from '../icons/shareicon'
import { Twittericon } from '../icons/twittericon'
import { Youtubeicon } from '../icons/youtubeicon'
import { getDate } from '../utlits'
import { Sidebar } from '../components/Sidebar'

export function Dashboard() {
const [modalopen, setmodalopen] = useState(false);

return <div>
        <Sidebar/>
        <div className='bg-[#f9fafb] h-screen ml-90 border border-gray-200'>
            <Createcontentmodal open={modalopen} onClose={() => {setmodalopen(false)}}/>
            <div className='flex justify-between m-4 p-4 items-center'>
                <div className='text-3xl font-bold pl-6' >
                All Notes
                </div>
                <div className='flex gap-4'>
                    <Buttons variant='secondary' title= {"Share Brain"} startIcons={<Shareicon />} ></Buttons>
                    <Buttons variant='primary' title= {"Add Content"} startIcons={<Plusicon />} onClick={() => {setmodalopen(true)}}></Buttons>
                </div>
            </div>
            <div className='flex justify-around flex-wrap gap-y-6 px-4 pt-4'>
                    <Cards starticon={<Youtubeicon/>} heading={"Devops"} linkurl={"https://www.youtube.com/watch?v=sSRaakd95Nk"} type="youtube" timestamp={getDate()}></Cards>
                    <Cards starticon={<Twittericon/>} heading={"X Post"} linkurl={"https://twitter.com/Tabish_khan090/status/1937636871418314975?ref_src=twsrc%5Etfw"} type="twitter" timestamp={getDate()}></Cards>
                    <Cards starticon={<Documenticon/>} heading={"Last Semester"}  type="document" content='Machine Learning is mainly divided into three core types: Supervised, Unsupervised and Reinforcement Learning along with two additional types, Semi-Supervised and Self-Supervised Learning.
                    ' timestamp={getDate()}></Cards>
            </div>
        </div>
    </div>
}
