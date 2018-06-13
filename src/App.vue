<template>
    <div class="container">
        <quotesCounter></quotesCounter>
        <createQuote :title="title" :subtitle="subtitle" :content="content" @createQuote="addQuote" 
        @updateTitle="updateTitle"
        @updateSubtitle="updateSubtitle"
        @updateContent="updateContent"></createQuote>
        <div class="row">
            <quote v-for="quote in quotes" :key="quote.id" @deleteQuote="deleteQuote(quote.id)">
                <!-- access an array of quote objects -->
                <h1 slot="title">{{ quote.title }}</h1>
                <h3 slot="subtitle">{{ quote.subtitle }}</h3>
                <p slot="content">{{ quote.content }}</p>
            </quote>
        </div>
    </div>
</template>

<script>
    import { stateManager } from './main'

    import CreateQuote from './components/CreateQuote.vue'
    import Quote from './components/Quote.vue'
    import QuotesCounter from './components/QuotesCounter.vue'

    export default {
        components: {
            createQuote: CreateQuote,
            quote: Quote,
            quotesCounter: QuotesCounter
        },
        data: function () {
            return {
                quotes: [],
                title: '',
                subtitle: '',
                content: '',
                id: 0
            }
        },
        methods: {
            addQuote () {
                let quoteObj = {
                    id: this.id++,
                    title: this.title,
                    subtitle: this.subtitle,
                    content: this.content
                }
                if (!this.content || stateManager.quoteCounter > 9) {
                    return
                }
                this.quotes.push(quoteObj)
                console.log(stateManager.quoteCounter)
                stateManager.quoteCounter++
            },
            deleteQuote (id) {
                 this.quotes = this.quotes.filter(quote => quote.id !== id);
                 stateManager.quoteCounter--
            },
            updateTitle (val) {
                this.title = val
            },
            updateSubtitle (val) {
                this.subtitle = val
            },
            updateContent (val) {
                this.content = val
            }
        }
    }
</script>

<style>
</style>
