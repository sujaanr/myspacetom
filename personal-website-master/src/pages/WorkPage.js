import { ProjectCard } from '../components/ProjectCard';
import myspaceMockup from '../imgs/myspace-mockup.png'
import photographyPortfolio from '../imgs/photography-portfolio.png'
import travelBlog from '../imgs/travel-blog.png'
import socialMediaTalk from '../imgs/social-media-talk.png'

export function WorkPage() {
    return (
        <div className= 'flex flex-col main-body items-center mb-[60px] space-y-10'>
        <div className= 'flex flex-col space-y-10 md:flex-row md:space-x-20 md:space-y-0'>
          <ProjectCard
            id= '1'
            color= '#FF83C8'
            title= 'MySpace Revisited'
            tags={['Web Dev', 'UI/UX Design']}
            company= 'Personal Project'
            img= {myspaceMockup}
            projectPage = '/myspace-revisited'
            />
          <ProjectCard
            id= '2'
            color= '#2449FE'
            title= 'Photography Portfolio'
            tags={['Photography', 'Web Design']}
            company= 'Personal Project'
            img= {photographyPortfolio}
            projectPage = '/photography-portfolio'
          />
        </div>
        <div className= 'flex flex-col space-y-10 md:flex-row md:space-x-20 md:space-y-0'>
          <ProjectCard
            id= '3'
            color= '#FFEC42'
            title= 'Travel Blog'
            tags={['Web Dev', 'Content Creation']}
            company= 'Personal Project'
            img= {travelBlog}
            projectPage = '/travel-blog'
            />
          <ProjectCard
            id= '4'
            color= '#84E7D6'
            title= 'Social Media Insights'
            tags={['Public Speaking', 'Social Media']}
            company= 'Conference Talk'
            img= {socialMediaTalk}
            projectPage = '/social-media-insights'
          />
        </div>
      </div>
    )
}
