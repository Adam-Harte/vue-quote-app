<template>
    <div class="container">
        <quotesCounter></quotesCounter>
        <createQuote :title="title" :subtitle="subtitle" :content="content" @createQuote="addQuote"></createQuote>
        <quote v-for="quote in quotes">
            <!-- access an array of quote objects -->
            <h1 slot="title">{{ quote.title }}</h1>
            <h3 slot="subtitle">{{ quote.subtitle }}</h3>
            <p slot="content">{{ quote.content }}</p>
        </quote>
    </div>
</template>

<script>
    import CreateQuote from './components/CreateQuote'
    import Quote from './components/Quote'
    import QuotesCounter from './components/QuotesCounter'

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
                content: ''
            }
        },
        methods: {
            addQuote () {
                let quoteObj = {
                    id: 0,
                    title: this.title,
                    subtitle: this.subtitle,
                    content: this.content
                }
                this.quotes.push(quoteObj);
            }
        }
    }
</script>

<style>
</style>
