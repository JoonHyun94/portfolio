import React from 'react';

class Project extends React.Component {
    render() {
        return (
            <div class = "project">
                <div class = "index">{this.props.index}</div>
                <div class = "project_title"><h1 class = "project_h1">{this.props.projectTitle}</h1></div>
                
                <div class = "project_body">
                    <div class = "kh_project">
                        <h1 class = "project_content_title">KHOB(취업정보 사이트)</h1>
                        <div class = "kh_project_img"><img class = "kh_img" src = {this.props.image} alt = "profile"/></div>
                        <div class = "kh_project_content">
                            <h1 class = "project_content_title">Introduction</h1>
                            <div class = "project_introduction">{this.props.khProjectIntroduction}</div>
                            <h1 class = "project_content_title">MyRule</h1>
                            <div class = "project_myrule">{this.props.khProjectMyrule}</div>
                        </div>
                    </div>
                </div>
                
                <div class = "skill">
                    <span class = "skills">#Java</span>
                    <span class = "skills">#SpringFramework(MVC)</span>
                    <span class = "skills">#JSP</span>
                    <span class = "skills">#CSS</span>
                    <span class = "skills">#JavaScript</span>
                    <span class = "skills">#Ajax</span>
                    <span class = "skills">#Oracle</span>
                </div>

            </div>
        )
    }
}

export default Project;