import React from 'react'
import { Container, Col, Form, FormGroup, Label, Input, Button, } from 'reactstrap'
import SlimHeader from '../../commons/slimHeader'
import '../../../assets/styles/feeds.scss'

export default class NewAndNowUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = { file: '', imagePreviewUrl: '' };
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
    }

    render() {
        let { imagePreviewUrl } = this.state;

        return (
            <div>
                <SlimHeader />

                <Container className="NewNowLogin">
                    <h3>Upload Post</h3>
                    <Form name="newandnowupload" action="/new-and-now" /*method="post"*/ onSubmit={(e) => this.handleSubmit(e)}>
                        <Col>
                            <FormGroup>
                                <Label>Title</Label>
                                <Input type="text" name="title" placeholder="Enter Title" />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label>Description</Label>
                                <Input type="textarea" rows="5" name="description" placeholder="Enter Description" />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Input type="file" onChange={(e) => this.handleImageChange(e)} />
                            </FormGroup>
                        </Col>
                        <center>
                            <Button onClick={(e) => this.handleSubmit(e)}>Post</Button>
                        </center>
                    </Form>
                    <div className="PreviewRow">
                        <div className="NewNowimgPreview">
                            <img src={imagePreviewUrl} />
                        </div>
                    </div>
                </Container>

            </div>
        )
    }
}