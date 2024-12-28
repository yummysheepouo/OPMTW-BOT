const {
    ApplicationCommandType,
    ApplicationCommandOptionType,
    EmbedBuilder,
    resolveColor,
} = require('discord.js')

module.exports = {
    name: "embed",
    description: "A advanced embed builder for you to make your own embed!",
    userPerms: [],
    botPerms: [],
    type: ApplicationCommandType.ChatInput,
    options: [{
        name: "import",
        description: "import a embed using a embed save code!",
        type: ApplicationCommandOptionType.Subcommand,
        options: [{
            name: 'save_code',
            description: 'enter your embed save code here!',
            type: ApplicationCommandOptionType.String,
            required: true
        }],
    }, {
        name: 'create',
        description: 'make your own embed!',
        type: ApplicationCommandOptionType.Subcommand,
        options: [{
            name: 'author_text',
            description: 'the author text if the embed',
            type: ApplicationCommandOptionType.String,
            max_length: 256
        }, {
            name: 'author_icon',
            description: 'icon of the author text',
            type: ApplicationCommandOptionType.String
        }, {
            name: 'author_url',
            description: 'url of the author text',
            type: ApplicationCommandOptionType.String
        }, {
            name: 'title_url',
            description: 'set the url of the title',
            type: ApplicationCommandOptionType.String
        }, {
            name: 'title',
            description: 'set the title for your embed',
            type: ApplicationCommandOptionType.String,
            max_length: 256
        }, {
            name: `description`,
            description: 'set the description for your embed',
            type: ApplicationCommandOptionType.String,
            max_length: 4096
        }, {
            name: 'color',
            description: 'the color of the embed',
            type: ApplicationCommandOptionType.String
        }, {
            name: 'thumbnail',
            description: 'Thumbnail of the embed',
            type: ApplicationCommandOptionType.String
        }, {
            name: 'image',
            description: 'image of the embed',
            type: ApplicationCommandOptionType.String
        }, {
            name: 'footer_text',
            description: 'Text of the footer',
            type: ApplicationCommandOptionType.String,
            max_length: 2048,
        }, {
            name: 'footer_icon',
            description: 'Icon of the footer',
            type: ApplicationCommandOptionType.String
        }, {
            name: 'timestamp',
            description: 'Wether or not to set a timestamp',
            type: ApplicationCommandOptionType.Boolean,
        }]
    }, {
        name: 'edit',
        description: 'Edit a embed from a save code!',
        type: ApplicationCommandOptionType.Subcommand,
        options: [{
            name: 'save_code',
            description: 'The save code for the embed that you wish to edit!',
            type: ApplicationCommandOptionType.String,
            required: true
        }, {
            name: 'author_text',
            description: 'the author text if the embed',
            type: ApplicationCommandOptionType.String,
            max_length: 256
        }, {
            name: 'author_icon',
            description: 'icon of the author text',
            type: ApplicationCommandOptionType.String
        }, {
            name: 'author_url',
            description: 'url of the author text',
            type: ApplicationCommandOptionType.String
        }, {
            name: 'title_url',
            description: 'set the url of the title',
            type: ApplicationCommandOptionType.String
        }, {
            name: 'title',
            description: 'set the title for your embed',
            type: ApplicationCommandOptionType.String,
            max_length: 256
        }, {
            name: `description`,
            description: 'set the description for your embed',
            type: ApplicationCommandOptionType.String,
            max_length: 4096
        }, {
            name: 'color',
            description: 'the color of the embed',
            type: ApplicationCommandOptionType.String
        }, {
            name: 'thumbnail',
            description: 'Thumbnail of the embed',
            type: ApplicationCommandOptionType.String
        }, {
            name: 'image',
            description: 'image of the embed',
            type: ApplicationCommandOptionType.String
        }, {
            name: 'footer_text',
            description: 'Text of the footer',
            type: ApplicationCommandOptionType.String,
            max_length: 2048,
        }, {
            name: 'footer_icon',
            description: 'Icon of the footer',
            type: ApplicationCommandOptionType.String
        }, {
            name: 'timestamp',
            description: 'Wether or not to set a timestamp',
            type: ApplicationCommandOptionType.Boolean,
        }]
    }],

    async run({
        interaction
    }) {

        
        const whiteList = ['911821325969027152', '994532605246590987', '899287731857944656']
        if(!whiteList.find((id) => id === interaction.user.id)) return interaction.reply({
            content: '你沒有權限使用。',
            ephemeral: true
        })
        

        function isLink(url) {
            const linkExp = /(https?:\/\/[^\s]+)/g;
            if (url.match(linkExp)) {
                return true;
            } else {
                return false;
            }
        }

        function isImage(url) {
            const imgExp = /\.(jpg|jpeg|png|webp|avif|gif|svg|JPG|JPEG|PNG)$/;
            return imgExp.test(url);
        }

        function isColor(color) {
            const colorExp = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
            if (color.match(colorExp)) {
                return true;
            } else {
                return false;
            }
        }

        function errorEmbed(error) {
            interaction.reply({
                embeds: [
                    new EmbedBuilder()
                        .setColor('Red')
                        .setTitle('Error!')
                        .setDescription(error)
                ],
                ephemeral: true,
            })
        }

        function lineBreak(embed) {
            embed.description ? embed.description = embed.description?.replace(/\\n/g, '\n') : null
            embed.title ? embed.title = embed.title?.replace(/\\n/g, '\n') : null
            embed.author?.name ? embed.author.name = embed.author.name.replace(/\\n/g, '\n') : null 
            embed.footer?.text ? embed.footer.text = embed.footer.text.replace(/\\n/g, '\n') : null
            return;
        }

        const { options } = interaction;

        const subCmd = options.getSubcommand();

        const authorText = options.getString('author_text');
        const authorIcon = options.getString('author_icon');
        const authorUrl = options.getString('author_url');
        const titleUrl = options.getString('title_url');
        const title = options.getString('title');
        const description = options.getString('description');
        const color = options.getString('color');
        const thumbnail = options.getString('thumbnail');
        const image = options.getString('image');
        const footerText = options.getString('footer_text');
        const footerIcon = options.getString('footer_icon');
        let timestamp = options.getBoolean('timestamp');

        if (subCmd === 'create') {
            timestamp = timestamp === true ? 'true' : 'false'

            if ((authorUrl || authorIcon) && !authorText) {
                return errorEmbed(
                    `You need to enter the \`author text\` to enter the \`author url\`/\`author icon\`!`
                );
            }
            if (authorUrl && !isLink(authorUrl)) {
                return errorEmbed(`Enter a valid url to set the \`author url\`!`);
            }
            if (authorIcon && !isImage(authorIcon)) {
                return errorEmbed(`Enter a valid url to set the \`author icon\`!`);
            }
            if (color && !isColor(color)) {
                return errorEmbed(`Please enter a valid hex color!`);
            }
            if (titleUrl && !title) {
                return errorEmbed(
                    `You need to enter the \`title\` to enter the \`title url\`!`
                );
            }
            if (titleUrl && !isLink(titleUrl)) {
                return errorEmbed(`Enter a valid url to set the \`title url\`!`);
            }
            if (footerIcon && !footerText) {
                return errorEmbed(
                    `You need to enter the \`footer text\` to enter the \`footer icon\`!`
                );
            }
            if (footerIcon && !isImage(footerIcon)) {
                return errorEmbed(`Enter a valid url to set the \`footer icon\`!`);
            }
            if (image && !isImage(image)) {
                return errorEmbed(`Enter a valid url to set the \`image\``);
            }
            if (thumbnail && !isLink(thumbnail)) {
                return errorEmbed(`Enter a valid url to set the \`thumbnail\`!`);
            }
            if (
                !(
                    authorText ||
                    title ||
                    description ||
                    footerText ||
                    image ||
                    thumbnail
                )
            ) {
                return errorEmbed(`You need to enter at least one text or image field!`);
            }
            const embed = {
                title: title,
                color: color,
                description: description,
                url: titleUrl,
                thumbnail: {
                    url: thumbnail
                },
                image: {
                    url: image
                },
                author: {
                    name: authorText,
                    icon_url: authorIcon,
                    url: authorUrl
                },
                footer: {
                    text: footerText,
                    icon_url: footerIcon
                },
                timestamp: timestamp
            }

            let saveCode = []
            for (const key in embed) {
                const val = embed[key]
                if (val === null) {
                    delete embed[key]
                    saveCode.push('$%[null]/')
                } else if (typeof val === 'object' && val !== null) {
                    for (const valKey in val) {
                        if(val[valKey] === null) {
                            saveCode.push('$%[null]/')
                            delete val[valKey]
                        } else {
                            saveCode.push(val[valKey])
                        }
                    }
                    if (Object.keys(val).length === 0) {
                        delete embed[key]
                    } 
                } else {
                    saveCode.push(val)
                }
            }


            if (embed.timestamp === "true") {
                embed.timestamp = new Date().toISOString()
            } else {
                delete embed.timestamp
            }
    
            if(embed.color) {
                embed.color = resolveColor(embed.color)
            }

            lineBreak(embed)

            saveCode = saveCode.join(':')

            if (saveCode.length > 1968) {
                interaction.reply({
                    content: `Embed Created! Sadly, your embed was too long for us to generate and send a save code.`,
                    ephemeral: true
                })
            } else {
                interaction.reply({
                    content: `Embed Created!\n Save code: \`${saveCode}\``,
                    ephemeral: true
                })
            }
            return interaction.channel.send({
                embeds: [
                    embed
                ]
            })
        }


        if (subCmd === 'import') {
            let saveCode = options.getString('save_code').split(':')
            if (saveCode.length !== 12) {
                return errorEmbed('Please enter a valid saveCode!')
            }
            let count = 0;

            const embed = {
                title: "title",
                color: "color",
                description: "description",
                url: "titleUrl",
                thumbnail: {
                    url: "thumbnail"
                },
                image: {
                    url: "image"
                },
                author: {
                    name: "authorText",
                    icon_url: "authorIcon",
                    url: "authorUrl"
                },
                footer: {
                    text: "footerText",
                    icon_url: "footerIcon"
                },
                timestamp: "timestamp"
            }

            for (const key in embed) {
                const val = embed[key]
                if (typeof val === 'object') {
                    for (const valKey in val) {
                        if (saveCode[count] === '$%[null]/') {
                            delete val[valKey]
                            count++
                        } else {
                            val[valKey] = saveCode[count]
                            count++
                        }
                    }
                    if (Object.keys(val).length === 0) {
                        delete embed[key]
                    }
                } else if (saveCode[count] === '$%[null]/') {
                    delete embed[key]
                    count++
                } else {
                    embed[key] = saveCode[count]
                    count++
                }
            }

            if ((embed.author?.url || embed.author?.icon_url) && !embed.author?.name) {
                return errorEmbed(`Please enter a valid save code.`);
            }
            if (embed.author?.url && !isLink(embed.author?.url)) {
                return errorEmbed(`Please enter a valid save code.`);
            }
            if (embed.author?.icon_url && !isImage(embed.author?.icon_url)) {
                return errorEmbed(`Please enter a valid save code.`);
            }
            if (embed.color && !isColor(embed.color)) {
                return errorEmbed(`Please enter a valid save code.`);
            }
            if (embed.url && !embed.title) {
                return errorEmbed(`Please enter a valid save code.`);

            }
            if (embed.url && !isLink(embed.url)) {
                return errorEmbed(`Please enter a valid save code.`);
            }
            if (embed.footer?.icon_url && !embed.footer?.text) {
                return errorEmbed(`Please enter a valid save code.`);

            }
            if (embed.footer?.icon_url && !isImage(embed.footer?.icon_url)) {
                return errorEmbed(`Please enter a valid save code.`);
            }
            if (embed.image?.url && !isImage(embed.image?.url)) {
                return errorEmbed(`Please enter a valid save code.`);
            }
            if (embed.thumbnail?.url && !isLink(embed.thumbnail?.url)) {
                return errorEmbed(`Please enter a valid save code.`);
            }
            if (
                !(
                    embed.author?.name ||
                    embed.title ||
                    embed.description ||
                    embed.footer?.text ||
                    embed.image?.url ||
                    embed.thumbnail?.url
                )
            ) {
                return errorEmbed(`Please enter a valid save code.`);
            }

            if (embed.timestamp === "true") {
                embed.timestamp = new Date().toISOString()
            } else {
                delete embed.timestamp
            }

    
            if(embed.color) {
                embed.color = resolveColor(embed.color)
            }

            interaction.reply({
                content: 'Embed imported successfully!',
                ephemeral: true
            })

            lineBreak(embed)

            return interaction.channel.send({
                embeds: [
                    embed
                ]
            })
        }


        if(subCmd === 'edit') {
            const saveCode = options.getString('save_code').split(':')
            if(timestamp !== null) {
                timestamp = timestamp === true ? 'true' : 'false'
            }
            
            const source = {
                title: title,
                color: color,
                description: description,
                url: titleUrl,
                thumbnail: {
                    url: thumbnail
                },
                image: {
                    url: image
                },
                author: {
                    name: authorText,
                    icon_url: authorIcon,
                    url: authorUrl
                },
                footer: {
                    text: footerText,
                    icon_url: footerIcon
                },
                timestamp: timestamp
            }

            const target = {
                title: "title",
                color: "color",
                description: "description",
                url: "titleUrl",
                thumbnail: {
                    url: "thumbnail"
                },
                image: {
                    url: "image"
                },
                author: {
                    name: "authorText",
                    icon_url: "authorIcon",
                    url: "authorUrl"
                },
                footer: {
                    text: "footerText",
                    icon_url: "footerIcon"
                },
                timestamp: "timestamp"
            }

            let example = JSON.parse(JSON.stringify(source));


            let count = 0;

            for (const key in target) {
                const val = target[key]
                if (typeof val === 'object') {
                    for (const valKey in val) {
                        if (saveCode[count] === '$%[null]/') {
                            delete val[valKey]
                            count++
                        } else {
                            val[valKey] = saveCode[count]
                            count++
                        }
                    }
                    if (Object.keys(val).length === 0) {
                        delete target[key]
                    }
                } else if (saveCode[count] === '$%[null]/') {
                    delete target[key]
                    count++
                } else {
                    target[key] = saveCode[count]
                    count++
                }
            }

            for(const key in source) {
                const val = source[key]
                if(typeof val === 'object' && val !== null) {
                    for(const valKey in val) {
                        if(val[valKey] === null || val[valKey].toLowerCase() === 'none') {
                            delete val[valKey]
                        }
                    }
                    if(Object.keys(val).length === 0) {
                        delete source[key]
                    }
                } else if(val === null) {
                    delete source[key]
                } else if(val.toLowerCase() === 'none') {
                    delete source[key]
                }
            }
            
            const embed = Object.assign(target, source)

            example = {
                title: (embed.title || null),
                color: (embed.color || null),
                description: (embed.description || null),
                url: (embed.url || null),
                thumbnail: {
                    url: (embed.thumbnail?.url || null)
                },
                image: {
                    url: (embed.image?.url || null)
                },
                author: {
                    name: (embed.author?.name || null),
                    icon_url: (embed.author?.icon_url || null),
                    url: (embed.author?.url || null)
                },
                footer: {
                    text: (embed.footer?.text || null),
                    icon_url: (embed.footer?.icon_url || null)
                },
                timestamp: (embed.timestamp || null)
            }

            let embedSaveCode = []

            for (const key in example) {
                const val = example[key]

                if (val === null) {
                    delete example[key]
                    embedSaveCode.push('$%[null]/')
                } else if (typeof val === 'object' && val !== null) {
                    for (const valKey in val) {
                        if(val[valKey] === null) {
                            embedSaveCode.push('$%[null]/')
                            delete val[valKey]
                        } else { 
                            embedSaveCode.push(val[valKey])
                        }
                    }
                    if (Object.keys(val).length === 0) {
                        delete example[key]
                    } 
                } else {
                    embedSaveCode.push(val)
                }
            }
            embedSaveCode = embedSaveCode.join(':')


            if ((embed.author?.url || embed.author?.icon_url) && !embed.author?.name) {
                return errorEmbed(`Please enter a valid save code.`);
            }
            if (embed.author?.url && !isLink(embed.author?.url)) {
                return errorEmbed(`Please enter a valid save code.`);
            }
            if (embed.author?.icon_url && !isImage(embed.author?.icon_url)) {
                return errorEmbed(`Please enter a valid save code.`);
            }
            if (embed.color && !isColor(embed.color)) {
                return errorEmbed(`Please enter a valid save code.`);
            }
            if (embed.url && !embed.title) {
                return errorEmbed(`Please enter a valid save code.`);
            }
            if (embed.url && !isLink(embed.url)) {
                return errorEmbed(`Please enter a valid save code.`);
            }
            if (embed.footer?.icon_url && !embed.footer?.text) {
                return errorEmbed(`Please enter a valid save code.`);

            }
            if (embed.footer?.icon_url && !isImage(embed.footer?.icon_url)) {
                return errorEmbed(`Please enter a valid save code.`);
            }
            if (embed.image?.url && !isImage(embed.image?.url)) {
                return errorEmbed(`Please enter a valid save code.`);
            }
            if (embed.thumbnail?.url && !isLink(embed.thumbnail?.url)) {
                return errorEmbed(`Please enter a valid save code.`);
            }
            if (
                !(
                    embed.author?.name ||
                    embed.title ||
                    embed.description ||
                    embed.footer?.text ||
                    embed.image?.url ||
                    embed.thumbnail?.url
                )
            ) {
                return errorEmbed(`Please enter a valid save code.`);
            }

            if (embed.timestamp === 'true') {
                embed.timestamp = new Date().toISOString()
            } else {
                delete embed.timestamp
            }
    
            if(embed.color) {
                embed.color = resolveColor(embed.color)
            }
            
            if (embedSaveCode.length > 1956) {
                interaction.reply({
                    content: `Embed edited successfully! Sadly, your embed was too long for us to generate and send a save code.`,
                    ephemeral: true
                })
            } else {
                interaction.reply({
                    content: `Embed edited successfully!\n Save code: \`${embedSaveCode}\``,
                    ephemeral: true
                })
            }

            lineBreak(embed)

          interaction.channel.send({
            embeds: [
                embed
            ]
          })

        
            
        }


    }
}





