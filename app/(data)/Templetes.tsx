    export default  [
        {
            name:'Blog Title',
            desc:'An AI tool that generate blog title depends on yout blog information',
            category:'Blog',
            icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
            aiPrompt:'Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format',
            slug:'generate-blog-title',
            form:[
                {
                    label:'Enter your blog niche',
                    field:'input',
                    name:'niche',
                    required:true
                },
                {
                    label:'Enter blog outline',
                    field:'textarea',
                    name:'outline',
                    
                }
            ]
        },
        {
            name: 'Blog Content',
            desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
            category: 'blog',
            icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
            slug: 'blog-content-generation',
            aiPrompt: 'Generate Blog Content based on topic and outline in rich text editor format',
            form: [
                {
                    label: 'Enter your blog topic',
                    field: 'input',
                    name: 'topic',
                    required:true
                },
                {
                    label: 'Enter blog Outline here',
                    field: 'textarea',
                    name: 'outline'
                }
            ]
        },
        {
            name: 'Blog Topic Ideas',
            desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
            category: 'Blog',
            icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
            slug: 'blog-topic-idea',
            aiPrompt: 'Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format',
            form: [
                {
                    label: 'Enter your Niche',
                    field: 'input',
                    name: 'niche',
                    required:true
                },
            ]
        },
        {
            name: 'Youtube SEO Title',
            desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
            category: 'Youtube Tools',
            icon: 'https://cdn-icons-png.flaticon.com/128/402/402075.png',
            slug: 'youtube-seo-title',
            aiPrompt: 'Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result in HTML tags format',
            form: [
                {
                    label: 'Enter your youtube video topic keyowords',
                    field: 'input',
                    name: 'keywords',
                    required:true
                },
                {
                    label: 'Enter youtube description Outline here',
                    field: 'textarea',
                    name: 'outline'
                }
            ]

        },
        {

            name: 'Youtube Description',
            desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
            category: 'Youtube Tool',
            icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111748.png',
            slug: 'youtube-description',
            aiPrompt: 'Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format',
            form: [
                {
                    label: 'Enter your blog topic/title',
                    field: 'input',
                    name: 'topic',
                    required:true
                },
                {
                    label: 'Enter youtube Outline here',
                    field: 'textarea',
                    name: 'outline'
                }
            ]
        },
        {
            name: 'Youtube Tags',
            desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
            category: 'Youtube Tool',
            icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
            slug: 'youtube-tag',

            aiPrompt: 'Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format',

            form: [
                {
                    label: 'Enter your youtube title',
                    field: 'input',
                    name: 'title',
                    required:true
                },
                {
                    label: 'Enter youtube video Outline here (Optional)',
                    field: 'textarea',
                    name: 'outline'
                }
            ]
        },

        {
            name: 'Rewrite Article (Plagiarism Free)',
            desc: 'Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.',
            icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
            category: 'Rewriting Tool',
            slug: 'rewrite-article',
            aiPrompt: 'Rewrite give article without any Plagiarism in rich text editor format',
            form: [
                {
                    label: '🤖 Provide your Article/Blogpost or any other content to rewrite.',
                    field: 'textarea',
                    name: 'article',
                    required:true
                }
            ]
        },
        {
            name: 'Text Improver',
            desc: 'This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.',
            icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
            category: 'Writing Assistant',
            slug: 'text-improver',
            aiPrompt: 'Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format',
            form: [
                {
                    label: 'Enter text that you want to re-write or improve',
                    field: 'textarea',
                    name: 'textToImprove'
                }
            ]
        },
        {
            name: 'Add Emojis to Text',
            desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
            icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
            category: 'blog',
            slug: 'add-emoji-to-text',
            aiPrompt: 'Add Emoji to outline text depends on outline and rewrite it in rich text editor format',
            form: [
                {
                    label: 'Enter your text to add emojis',
                    field: 'textarea',
                    name: 'outline',
                    required:true
                }
            ]
        },
        {
            name: 'Instagram Post Generator',
            desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
            icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
            category: 'blog',
        
            slug: 'instagram-post-generator',
            aiPrompt: 'Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format',
            form: [
                {
                    label: 'Enter Keywords for your post',
                    field: 'input',
                    name: 'keywords',
                    required:true
                },
            
            ]
        },
        {
            name: 'Instagram Hash Tag Generator',
            desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
            icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
            category: 'blog',
        
            slug: 'instagram-hash-tag-generator',
            aiPrompt: 'Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format',
            form: [
                {
                    label: 'Enter Keywords for your instagram hastag',
                    field: 'input',
                    name: 'keywords',
                    required:true
                },
            
            ]
        },
        {
            name: 'Instagram Post/Reel Idea',
            desc: 'An AI tool that generate New and trending instagram idea depends on your niche',
            icon: 'https://cdn-icons-png.flaticon.com/128/1029/1029183.png',
            category: 'instagram',
        
            slug: 'instagram-post-idea-generator',
            aiPrompt: 'Generate 5-10 Instagram idea depends on niche with latest trend and give output in  in rich text editor format',
            form: [
                {
                    label: 'Enter Keywords / Niche for your instagram idea',
                    field: 'input',
                    name: 'keywords',
                    required:true
                },
            
            ]
        },
        {
            name: 'English Grammer Check',
            desc: 'AI Model to Correct your english grammer by providing the text',
            icon:'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
            category: 'english',
        
            slug: 'english-grammer-checker',
            aiPrompt: 'Rewrite the inputText by correcting the grammer and give output in  in rich text editor format',
            form: [
                {
                    label: 'Enter text to correct the grammer',
                    field: 'input',
                    name: 'inputText',
                    required:true
                },
            
            ]
        },
        {
            name: 'Write Code',
            desc: 'AI Model to generate programming code in any language',
            icon:'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
            category: 'Coding',
        
            slug: 'write-code',
            aiPrompt: 'Depends on user codeDescription write a code and give output in  in rich text editor format in code block ',
            form: [
                {
                    label: 'Enter description of code you want along with Programming Lang',
                    field: 'textarea',
                    name: 'codeDesscripton',
                    required:true
                },
            
            ]
        },
        {
            name: 'Explain Code',
            desc: 'AI Model to explain programming code in any language',
            icon:'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
            category: 'Coding',
        
            slug: 'explain-code',
            aiPrompt: 'Depends on user codeDescription explain code line by line and give output in  in rich text editor format in code block ',
            form: [
                {
                    label: 'Enter code which you want to understand',
                    field: 'textarea',
                    name: 'codeDesscripton',
                    required:true
                },
            
            ]
        },
        {
            name: 'Code Bug Detector',
            desc: 'This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.',
            icon:'https://cdn-icons-png.flaticon.com/128/4426/4426267.png',
            category: 'code-bug-detector',
        
            slug: 'code-bug-detector',
            aiPrompt: 'Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block ',
            form: [
                {
                    label: 'Enter code which you want to test bug',
                    field: 'textarea',
                    name: 'codeInput',
                    required:true
                },
            
            ]
        },
        {
            name: 'Tagline Generator',
            desc: 'Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.',
            icon:'https://cdn-icons-png.flaticon.com/128/2178/2178616.png',
            category: 'Marketting',
        
            slug: 'tagline-generator',
            aiPrompt: 'Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output  in rich text editor format ',
            form: [
                {
                    label: 'Product/Brand Name',
                    field: 'input',
                    name: 'productName',
                    required:true
                },
                {
                    label: 'What you are selling / Marketting',
                    field: 'textarea',
                    name: 'outline',
                    required:true
                },
            
            ]
        },
        {
            name: 'Product Description',
            desc: 'This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.',
            icon:'https://cdn-icons-png.flaticon.com/128/679/679922.png',
            category: 'Marketting',
        
            slug: 'product-description',
            aiPrompt: 'Depends on user productName and description generate small description for product for e-commer business give output  in rich text editor format  ',
            form: [
                {
                    label: 'Product Name',
                    field: 'input',
                    name: 'productName',
                    required:true
                },
                {
                    label: 'Product Details',
                    field: 'textarea',
                    name: 'outline',
                    required:true
                },
            
            ]
        },
        {
            name: 'Prelims Notes Generator',
            desc: 'An AI tool that generates concise and comprehensive notes for UPSC Prelims preparation, covering key topics and important facts.',
            category: 'education',
            icon: 'https://cdn-icons-png.flaticon.com/128/3051/3051916.png',
            slug: 'prelims-notes-generator',
            aiPrompt: 'Generate concise UPSC Prelims notes based on the given topic, incorporating key facts, important dates, and relevant examples.',
            form: [
                {
                    label: 'Enter the topic for Prelims notes',
                    field: 'input',
                    name: 'topic',
                    required: true
                },
                {
                    label: 'Specify any subtopics or key areas to focus on',
                    field: 'textarea',
                    name: 'subtopics'
                }
            ]
        },
        {
            name: 'Mains Notes Generator',
            desc: 'An AI tool that creates detailed and structured notes for UPSC Mains preparation, focusing on in-depth analysis and critical thinking.',
            category: 'education',
            icon: 'https://cdn-icons-png.flaticon.com/128/3051/3051916.png',
            slug: 'mains-notes-generator',
            aiPrompt: 'Generate comprehensive UPSC Mains notes on the given topic, including detailed explanations, case studies, and analytical perspectives.',
            form: [
                {
                    label: 'Enter the main topic for Mains notes',
                    field: 'input',
                    name: 'topic',
                    required: true
                },
                {
                    label: 'Specify key areas or aspects to cover',
                    field: 'textarea',
                    name: 'keyAreas'
                }
            ]
        },
        {
            name: 'Current Affairs Content Generator',
            desc: 'An AI tool that generates up-to-date content on current affairs relevant to UPSC preparation, covering national and international events.',
            category: 'education',
            icon: 'https://cdn-icons-png.flaticon.com/128/3051/3051916.png',
            slug: 'current-affairs-generator',
            aiPrompt: 'Generate current affairs content related to UPSC preparation, focusing on recent events, their implications, and relevance to various UPSC topics. Include context and background information, as well as a detailed analysis of the event\'s significance.',
            form: [
                {
                    label: 'Enter a specific current affairs topic or leave blank for general update',
                    field: 'input',
                    name: 'topic'
                },
                {
                    label: 'Specify the time frame (e.g., last week, last month)',
                    field: 'input',
                    name: 'timeFrame',
                    required: true
                },
                {
                    label: 'Provide any additional context or background information',
                    field: 'textarea',
                    name: 'context'
                },
                {
                    label: 'Enter specific news sources or articles for reference (optional)',
                    field: 'textarea',
                    name: 'newsSources'
                }
            ]
        },
        {
            name: 'UPSC News Identifier',
            desc: 'An AI tool that helps identify whether a news item is important for UPSC preparation.',
            category: 'education',
            icon: 'https://cdn-icons-png.flaticon.com/128/3051/3051916.png',
            slug: 'upsc-news-identifier',
            aiPrompt: 'Analyze the given news item and determine its relevance and importance for UPSC preparation. Provide a detailed explanation of why it is or isn\'t important, and how it relates to various UPSC topics or syllabus areas.',
            form: [
                {
                    label: 'Enter the news headline',
                    field: 'input',
                    name: 'headline',
                    required: true
                },
                {
                    label: 'Provide a brief summary of the news item',
                    field: 'textarea',
                    name: 'summary',
                    required: true
                },
                {
                    label: 'Enter the source of the news (optional)',
                    field: 'input',
                    name: 'source'
                },
                {
                    label: 'Specify any UPSC subjects or areas you think it might relate to (optional)',
                    field: 'textarea',
                    name: 'relatedAreas'
                }
            ]
        },
        {
            name: 'Prelims Questions Generator',
            desc: 'An AI tool that generates practice questions for UPSC Prelims, including answers and explanations to enhance understanding.',
            category: 'education',
            icon: 'https://cdn-icons-png.flaticon.com/128/3051/3051916.png',
            slug: 'prelims-questions-generator',
            aiPrompt: 'Generate at least 5 UPSC Prelims-style multiple-choice questions based on the given topic, including correct answers and detailed explanations for each.',
            form: [
                {
                    label: 'Enter the topic for Prelims questions',
                    field: 'input',
                    name: 'topic',
                    required: true
                },
                {
                    label: 'Specify any particular focus areas or subtopics',
                    field: 'textarea',
                    name: 'focusAreas'
                }
            ]
        },
        {
            name: 'Mains Model Answer Generator',
            desc: 'An AI tool that generates comprehensive model answers for UPSC Mains questions, including structured content, visual aids, and tailored conclusions.',
            category: 'education',
            icon: 'https://cdn-icons-png.flaticon.com/128/3051/3051916.png',
            slug: 'mains-model-answer-generator',
            aiPrompt: 'Generate a UPSC Mains model answer based on the given question and word limit (150 or 250 words). Structure: 1) Introduction: Brief overview of the topic. 2) Body: Analyze the question demands and present key arguments using a hierarchical structure with main points, subpoints, and further nested subpoints. For each main point, provide at least 2-3 subpoints, and for each subpoint, consider adding 2-3 nested subpoints if applicable. This hierarchical structure should demonstrate a clear and logical flow of ideas. Within the body, include an appropriate diagram to support your points. Choose from: a) Linear Timeline (Event-Based): For historical sequences or chronological events. b) Vertical Process Flow: For step-by-step processes or procedures. c) Basic Arrow Flow Diagram: For simple cause-effect relationships or decision flows. d) Mindmap: For concept relationships. e) Vicious Cycle: For circular concepts. f) Table: For comparisons. The diagram should be detailed, align with the UPSC perspective, and be presented in ASCII art format, centered and properly formatted. Ensure diagrams are clear and up to the UPSC standard. Mention the type of diagram used (e.g., "Linear Timeline Diagram:") before the ASCII art to identify the diagram type. 3) Conclusion: Summarize main points and provide a balanced view. Maintain coherence between text and visuals while adhering to the specified word limit. Ensure that the overall answer addresses the question demands comprehensively, showcasing depth of knowledge through the multi-level point structure.',
            form: [
                {
                    label: 'Enter the Mains question',
                    field: 'textarea',
                    name: 'question',
                    required: true
                },
                {
                    label: 'Enter word limit (150 or 250)',
                    field: 'input',
                    name: 'wordLimit',
                    required: true
                },
                {
                    label: 'Any specific instructions or focus areas',
                    field: 'textarea',
                    name: 'instructions'
                }
            ]
        },
        {
            name: 'LinkedIn Post Generator',
            desc: 'An AI tool that generates professional and engaging LinkedIn posts to boost your professional network and visibility.',
            icon: 'https://cdn-icons-png.flaticon.com/128/3536/3536505.png',
            category: 'Professional Networking',
            slug: 'linkedin-post-generator',
            aiPrompt: 'Generate a professional LinkedIn post based on the given topic and outline. The post should have a professional tone and be suitable for a business audience. If the topic is related to data science, include relevant code snippets or technical details where appropriate. For data science posts, consider including examples of data analysis techniques, machine learning algorithms, or data visualization methods. Provide the output in rich text editor format, ensuring any code snippets are properly formatted.',
            form: [
                {
                    label: 'Enter the main topic of your LinkedIn post',
                    field: 'input',
                    name: 'topic',
                    required: true
                },
                {
                    label: 'Provide an outline or key points for your post (Optional)',
                    field: 'textarea',
                    name: 'outline'
                },
                {
                    label: 'Specify your industry or professional field',
                    field: 'input',
                    name: 'industry',
                    required: true
                }
            ]
        }
    ]