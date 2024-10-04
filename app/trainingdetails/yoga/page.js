import Image from "next/image";
import style from './yoga.module.css';
import yoga from '../../../public/yoga/yogaSukasan.jpeg';
import yogaa from '../../../public/yoga/yogaa.png'
import yoga2 from '../../../public/yoga/yogaPOse.jpeg'
import modern from '../../../public/yoga/modernYogaPose.jpeg'
import guru from '../../../public/yoga/yogaguru.jpg'
import yogaguru from '../../../public/yoga/teacherYoga.jpeg';
import yogaclass from '../../../public/yoga/yoga_class_male.jpeg';
import yoclass from '../../../public/yoga/yogaWithmorning.jpeg';
import Link from "next/link";


export default function Yoga(){
    return(
        <>
        <div className={style.yogamain}>
            <div className={style.yoga}>
             <Image className={style.imgg} src={yogaa} height={280} width={280} alt="logo"></Image>
             <p> Elevate Your <span className={style.t1}> Mind</span>,<br/> <span className={style.t2}> Body</span>, and <br/> <span className={style.t3}> Strength</span></p>
            </div>
            <div className={style.yaga}>
                <h1>Yoga with Nature</h1>
                <p>Yoga is more than just a workout—it's a journey to inner peace and strength. 
                 Imagine a practice that not only sculpts your body but also calms your mind,
                 grounding you in the present moment. Through mindful movements and deep breathing, 
                 yoga helps you release stress, boost energy, and find balance in every aspect of life. 
                </p>
             </div>
        </div>
        <div className={style.gif1}>

        </div>
        <div className={style.cllas}>
            <div>
                <h1>Yoga Aasan</h1>
            </div>
            <div className={style.cll}>
                <div>
                    <Image src={yoga} height={240} alt="sukha aasan"/>
                
                </div>
                
                <div>
                    <Image src={yoga2} height={240} alt="savasan"/>
                </div>
                <div>
                    <Image src={modern} alt="moderrn pose"  height={240}/>
                </div>
            </div>


        </div>
        <div className={style.teach}>
            <div >
               <h2>Know about Teacher of yoga</h2> 
            </div>
            <div>
                <h3>
                 A Yoga Teacher, the Guide of Inner Peace and Growth
                </h3>
            </div>

        </div>
        <div className={style.teacher}>
            <div className={style.teacherpic}>
                <Image src={guru} alt={'yoga guru'} height={240}/>
                <Image src={yogaguru} height={240} alt="yoaga guru" />
                <p>"Welcome to our yoga class, where the focus is not just on physical exercise, but on creating harmony between mind, body, and spirit. Whether you're new to yoga or an experienced practitioner, our class is designed to help you connect with your breath, build strength, and find peace in every movement. Join us as we explore the transformative power of yoga, in a supportive and serene environment." </p>
            </div>
        </div>
        <div className={style.classes}>
            
            <div className={style.classitem}>
                <Image src={yogaclass} height={230} alt="yoga class"/>
                <Image src={yoclass} height={230} alt="yoga class"/>
                <div className={style.style}> 
                    <button className={style.btn}> <Link href={'/trainingdetails/yoga/yogaclass'}>explore yoga classes</Link></button>
                    <div className={style.discrip}>Welcome to our yoga classes </div>
                
                </div>
                
            </div>
        </div>
        
        </>
    );
}