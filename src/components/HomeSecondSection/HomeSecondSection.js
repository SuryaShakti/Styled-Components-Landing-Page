import React, {useState} from 'react';
import {
    Box,
    BtnDiv,
    InnerContainer,
    SearchBox,
    SearchBoxContainer,
    TextContainer,
    Heading,
    Description,
    ErrorMessage, SearchDiv, ShortCodeContainer, OrginalLink, ShortLink, BtnDiv1, LoadingDiv
} from "./HomeSecondSection.element";
import {Button} from "../../globalStyles";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";
import CardsContainer from "../CardsContainer/CardsContainer";

const HomeSecondSection = () => {

    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading,setLoading] = useState(false);
    const [copied, setCopied] = useState('');

    const [data, setData] = useState([])


    const saveHandler = async () => {
        if(value.trim() === ''){
            setError(true);
            setErrorMessage('Please add a link');
            return
        }else {
            setLoading(true);
            const url = value.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '');
            fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
                .then(res => res.json()).then(result => {
                if ( result.ok === true ){
                    setError(false);
                    setValue('');
                    console.log(result);
                    setData([...data, {original: result.result.original_link, shortLink: result.result.full_short_link}]);
                }else {
                    console.log('something went wrong------', result.ok, result.error)
                    setError(true);
                    setErrorMessage(result.error);
                }
            }).finally(() => {
                    setLoading(false);
                });
        }

    };

    console.log(data.length ? data : 'no data yet');

    return (
        <>
            <Box>
                <InnerContainer>
                    <SearchBoxContainer loading={loading}>
                        {
                            loading ? <LoadingDiv>

                                </LoadingDiv> :
                        <SearchDiv error={error}>
                            <SearchBox
                                error={error}
                                errorMessage={errorMessage}
                                placeholder={'Shorten a link here...'}
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                            {
                                error ?
                                    <ErrorMessage style={{color: 'red'}}>{errorMessage}</ErrorMessage>
                                    : null
                            }
                        </SearchDiv>
                        }
                        <BtnDiv>
                            <Button disabled={loading} primary onClick={() => saveHandler()}>
                                {'Shorten It!'}
                            </Button>
                        </BtnDiv>
                    </SearchBoxContainer>
                    {
                        data && data.map((each) => (
                            <ShortCodeContainer>
                                <OrginalLink>
                                    {each.original}
                                </OrginalLink>
                                <ShortLink>
                                    {each.shortLink}
                                </ShortLink>
                                <BtnDiv1>
                                    <CopyToClipboard text={each.shortLink} onCopy={() => setCopied(each.shortLink)}>
                                        <Button copied={copied === each.shortLink} primary>
                                            { copied === each.shortLink ?
                                                'Copied!' : 'Copy'
                                            }
                                        </Button>
                                    </CopyToClipboard>
                                </BtnDiv1>
                            </ShortCodeContainer>
                        ))
                    }
                    <TextContainer>
                        <Heading>
                            {'Advanced Statistics'}
                        </Heading>
                        <Description>
                            {'Track how your links are performing across the web with our advanced statistics dashboard.'}
                        </Description>
                    </TextContainer>
                    <CardsContainer />
                </InnerContainer>
            </Box>
        </>
    );
}

export default HomeSecondSection;